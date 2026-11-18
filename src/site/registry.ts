import type { Component } from 'vue'
import { defineAsyncComponent } from 'vue'

export interface ComponentPage {
  default: Component
  /** The example shown above Installation, from the frontmatter. */
  preview?: string
}

export interface SourceFile {
  name: string
  code: string
}

const examples = import.meta.glob<Component>('../examples/*.vue', { import: 'default' })
const exampleSources = import.meta.glob<string>('../examples/*.vue', { query: '?raw', import: 'default' })
const pages = import.meta.glob<ComponentPage>('../content/components/*.md')
const componentSources = import.meta.glob<string>('../components/ui/*/*.{vue,ts}', { query: '?raw', import: 'default' })

const KNOWN_DEPENDENCIES = [
  '@vase-ui/vue',
  'class-variance-authority',
  '@lucide/vue',
  '@vueuse/core',
]

/** An example from `src/examples`, such as `button-1`. */
export function getExample(name: string): Component | undefined {
  const load = examples[`../examples/${name}.vue`]
  return load && defineAsyncComponent(load)
}

export async function loadExampleSource(name: string): Promise<string> {
  return (await exampleSources[`../examples/${name}.vue`]?.()) ?? ''
}

/** The markdown page of a component, from `src/content/components`. */
export async function loadComponentPage(slug: string): Promise<ComponentPage | undefined> {
  return pages[`../content/components/${slug}.md`]?.()
}

export async function loadComponentFiles(slug: string): Promise<SourceFile[]> {
  const prefix = `../components/ui/${slug}/`
  const entries = Object.entries(componentSources).filter(([path]) => path.startsWith(prefix))
  return Promise.all(entries.map(async ([path, load]) => ({
    name: path.slice(prefix.length),
    code: await load(),
  })))
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
