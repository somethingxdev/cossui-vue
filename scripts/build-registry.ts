// @env node
// Builds the shadcn-vue registry into public/r: one JSON file per component, plus `style` and `utils`.
import assert from 'node:assert/strict'
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { componentDocs } from '../src/site/docs.ts'

interface RegistryFile {
  path: string
  type: string
  content: string
}

interface RegistryItem {
  $schema: string
  name: string
  type: string
  title: string
  description: string
  dependencies?: string[]
  registryDependencies?: string[]
  files?: RegistryFile[]
  cssVars?: Record<string, Record<string, string>>
  css?: Record<string, unknown>
  docs?: string
}

const NAMESPACE = '@cossui-vue'
const ITEM_SCHEMA = 'https://shadcn-vue.com/schema/registry-item.json'
const UI_DIR = 'src/components/ui'
const OUT_DIR = 'public/r'
const PACKAGES = [
  '@vase-ui/vue',
  'class-variance-authority',
  '@lucide/vue',
  '@vueuse/core',
]
const TEMPORAL_PARTS = [
  'calendar',
  'range-calendar',
  'date-field',
  'time-field',
  'date-picker',
  'date-range-picker',
  'time-clock',
  'time-picker',
]
const TEMPORAL_DOCS = 'These components need the global `Temporal`. For browsers without it, put `import \'temporal-polyfill/global\'` first in your entry file.'

/** Points the imports between components at the aliases that the shadcn-vue CLI rewrites for each project. */
function toRegistryImports(code: string): string {
  return code
    .replaceAll('from \'../../../lib/utils\'', 'from \'@/lib/utils\'')
    .replace(/from '\.\.\/([a-z-]+)((?:\/[\w.-]+)?)'/g, 'from \'@/components/ui/$1$2\'')
}

assert.equal(
  toRegistryImports('from \'../../../lib/utils\'\nfrom \'../button\'\nfrom \'../calendar/CalendarBase.vue\'\nfrom \'./variants\''),
  'from \'@/lib/utils\'\nfrom \'@/components/ui/button\'\nfrom \'@/components/ui/calendar/CalendarBase.vue\'\nfrom \'./variants\'',
)

function componentItem(slug: string, title: string, description: string): RegistryItem {
  const dir = join(UI_DIR, slug)
  const files = readdirSync(dir).sort().map(name => ({
    path: `ui/${slug}/${name}`,
    type: 'registry:ui',
    content: toRegistryImports(readFileSync(join(dir, name), 'utf8')),
  }))
  const code = files.map(file => file.content).join('\n')
  const internal = [
    ...code.matchAll(/from '@\/components\/ui\/([a-z-]+)/g),
  ].map(([, name]) => name!)
  const usesTemporal = TEMPORAL_PARTS.some(part => code.includes(`'@vase-ui/vue/${part}'`))
  const dependencies = PACKAGES.filter(dep => code.includes(`'${dep}`))
  if (usesTemporal)
    dependencies.push('temporal-polyfill')

  return {
    $schema: ITEM_SCHEMA,
    name: slug,
    type: 'registry:ui',
    title,
    description,
    dependencies,
    registryDependencies: [
      ...new Set(internal),
    ].filter(name => name !== slug).sort().map(name => `${NAMESPACE}/${name}`),
    files,
    ...(usesTemporal
      ? { docs: TEMPORAL_DOCS }
      : {}),
  }
}

// The docs site alone uses these tokens; the CLI also maps `code-foreground` onto itself.
const SITE_ONLY_TOKENS = /^(?:sidebar|chart|code)/

function declarations(block: string): Record<string, string> {
  const vars: Record<string, string> = {}
  for (const [, name, value] of block.matchAll(/--([\w-]+):([^;]+);/g)) {
    if (!SITE_ONLY_TOKENS.test(name!))
      vars[name!] = value!.replace(/\s+/g, ' ').trim()
  }
  return vars
}

function blockAfter(css: string, selector: string): string {
  const start = css.indexOf(`${selector} {`)
  let depth = 0
  for (let index = css.indexOf('{', start); index < css.length; index++) {
    if (css[index] === '{')
      depth++
    if (css[index] === '}' && --depth === 0)
      return css.slice(css.indexOf('{', start) + 1, index)
  }
  throw new Error(`No block for ${selector}`)
}

/** The coss tokens of globals.css, as the CLI expects them: CSS variables, theme variables and keyframes. */
function styleItem(): RegistryItem {
  const css = readFileSync('src/styles/globals.css', 'utf8')
  const themeBlock = blockAfter(css, '@theme inline')
  const theme = Object.fromEntries(Object.entries(declarations(themeBlock))
    .filter(([name]) => name.startsWith('radius-') || name.startsWith('animate-')))
  const keyframes = Object.fromEntries([
    ...themeBlock.matchAll(/@keyframes ([\w-]+) \{((?:[^{}]*\{[^{}]*\})*)\s*\}/g),
  ]
    .map(([, name, body]) => [
      `@keyframes ${name}`,
      Object.fromEntries([
        ...body!.matchAll(/([^{}]+)\{([^{}]*)\}/g),
      ]
        .map(([, step, rules]) => [
          step!.trim().replace(/\s+/g, ' '),
          Object.fromEntries(rules!.split(';')
            .map(rule => rule.split(':').map(part => part.trim()))
            .filter(([key, value]) => key && value)),
        ])),
    ]))

  return {
    $schema: ITEM_SCHEMA,
    name: 'style',
    type: 'registry:style',
    title: 'Style',
    description: 'The coss ui design tokens for light and dark themes, with the base styles and animations.',
    dependencies: ['@vase-ui/vue', 'class-variance-authority', '@lucide/vue'],
    registryDependencies: [`${NAMESPACE}/utils`],
    cssVars: {
      theme,
      light: declarations(blockAfter(css, ':root')),
      dark: declarations(blockAfter(css, '.dark')),
    },
    css: {
      ...keyframes,
      '@layer base': {
        '*': { '@apply border-border outline-ring/50': {} },
        'body': { '@apply bg-background text-foreground': {} },
      },
    },
    docs: 'Give the root element of your app `isolation: isolate`, so that popups in portals always show above it.',
  }
}

function utilsItem(): RegistryItem {
  return {
    $schema: ITEM_SCHEMA,
    name: 'utils',
    type: 'registry:lib',
    title: 'Utils',
    description: 'The cn helper, from the cn package.',
    dependencies: ['cn'],
    files: [
      {
        path: 'lib/utils.ts',
        type: 'registry:lib',
        content: readFileSync('src/lib/utils.ts', 'utf8'),
      },
    ],
  }
}

const items = [
  styleItem(),
  utilsItem(),
  ...componentDocs.map(doc => componentItem(doc.slug, doc.title, doc.description)),
]

rmSync(OUT_DIR, { recursive: true, force: true })
mkdirSync(OUT_DIR, { recursive: true })
for (const item of items)
  writeFileSync(join(OUT_DIR, `${item.name}.json`), `${JSON.stringify(item, null, 2)}\n`)
writeFileSync(join(OUT_DIR, 'registry.json'), `${JSON.stringify({
  $schema: 'https://shadcn-vue.com/schema/registry.json',
  name: 'cossui-vue',
  homepage: '/',
  items: items.map(({ $schema: _schema, files, ...item }) => ({
    ...item,
    files: files?.map(({ content: _content, ...file }) => file),
  })),
}, null, 2)}\n`)

console.log(`Built ${items.length} registry items into ${OUT_DIR}`)
