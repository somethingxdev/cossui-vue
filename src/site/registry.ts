import type { Component } from 'vue'
import { defineAsyncComponent } from 'vue'

export interface SourceFile {
  name: string
  code: string
}

const demos = import.meta.glob<Component>('../demos/*Demo.vue', { import: 'default' })
const demoSources = import.meta.glob<string>('../demos/*Demo.vue', { query: '?raw', import: 'default' })
const componentSources = import.meta.glob<string>('../components/ui/*/*.{vue,ts}', { query: '?raw', import: 'default' })

const KNOWN_DEPENDENCIES = [
  '@vase-ui/vue',
  'class-variance-authority',
  '@lucide/vue',
  '@vueuse/core',
]

function demoPath(slug: string): string {
  const pascal = slug.replace(/(?:^|-)([a-z])/g, (_, letter: string) => letter.toUpperCase())
  return `../demos/${pascal}Demo.vue`
}

export function getDemo(slug: string): Component | undefined {
  const load = demos[demoPath(slug)]
  return load && defineAsyncComponent(load)
}

export async function loadDemoSource(slug: string): Promise<string> {
  return (await demoSources[demoPath(slug)]?.()) ?? ''
}

export async function loadComponentFiles(slug: string): Promise<SourceFile[]> {
  const prefix = `../components/ui/${slug}/`
  const entries = Object.entries(componentSources).filter(([path]) => path.startsWith(prefix))
  return Promise.all(entries.map(async ([path, load]) => ({
    name: path.slice(prefix.length),
    code: await load(),
  })))
}

export function exportedNames(files: SourceFile[]): string[] {
  const index = files.find(file => file.name === 'index.ts')?.code ?? ''
  const names = [
    ...index.matchAll(/^export \{([^}]+)\}/gm),
  ].flatMap(([, list]) =>
    list!.split(',').map(item => item.trim().split(/\s+as\s+/).pop()!),
  )
  return names.filter(name => /^[A-Z]/.test(name) && !name.endsWith('Primitive'))
}

/** Other components of this library that the files import, such as `button`. */
export function componentDependencies(slug: string, files: SourceFile[]): string[] {
  const found = files.flatMap(file => [
    ...file.code.matchAll(/from '\.\.\/([a-z-]+)'/g),
  ].map(([, name]) => name!))
  return [
    ...new Set(found),
  ].filter(name => name !== slug).sort()
}

export function packageDependencies(files: SourceFile[]): string[] {
  return KNOWN_DEPENDENCIES.filter(dep => files.some(file => file.code.includes(`'${dep}`)))
}
