# cossui-vue

[coss ui](https://github.com/cosscom/ui) for Vue: the same styles and component API, built on the
unstyled primitives of [Vase UI](https://github.com/vase-ui/vase-ui) (`@vase-ui/vue`, a Vue port of Base UI).

Components are source files to copy into your app, like coss ui and shadcn-vue. This repository is
also the docs site: a Vue copy of [coss.com/ui](https://coss.com/ui) with a Vue green accent.

## Structure

| Path                      | What                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `src/components/ui/`      | 51 components: all 46 Vase UI components, plus Card, Label, Spinner, Textarea and Sheet from coss |
| `src/demos/`              | one demo per component, shown in the Preview and Code tabs                                        |
| `src/styles/globals.css`  | coss design tokens (light and `.dark`); copy it into your app                                     |
| `src/lib/utils.ts`        | `cn`, from the [`cn`](https://github.com/shadcn-ui/cn) package                                    |
| `src/site/`, `src/pages/` | the docs site: header, sidebar, Ctrl K search, component pages                                    |
| `src/styles/site.css`     | site only: Cal Sans, Vue green accent (`#42b883`)                                                 |

The card illustrations on the home page are the coss ui thumbnails, ported to Vue. Cal Sans is under the
SIL Open Font License (`src/assets/fonts/CalSans-OFL.txt`).

## Stack

Vue 3.5, TypeScript, Tailwind CSS 4, `@vase-ui/vue`, `cn`, `class-variance-authority`, `@lucide/vue`,
VueUse, Vue Router, Shiki. Tooling follows Anthony Fu's conventions: `@antfu/eslint-config` with
`antislop`, `vue-tsc`.

```bash
pnpm install
pnpm dev
pnpm run ci # lint + typecheck + build
```

Import `src/styles/globals.css` once. The date and time components need the global `Temporal`:
`src/main.ts` imports `temporal-polyfill/global` first, for Safari and older browsers.

## Registry

The components are a [shadcn-vue registry](https://shadcn-vue.com/docs/registry); nothing goes to npm.
`pnpm run registry` (also run by `dev` and `build`) writes `public/r/<name>.json` with
`scripts/build-registry.ts`: one item per component, plus `style` (the coss tokens) and `utils` (`cn`).
Deploy the site, and anyone installs with the shadcn-vue CLI:

```jsonc
// components.json
{
  "registries": { "@cossui-vue": "https://<your-site>/r/{name}.json" }
}
```

```bash
npx shadcn-vue@latest add @cossui-vue/style @cossui-vue/dialog
```

The CLI adds the components that an item uses (Dialog brings Button, Spinner and ScrollArea),
installs the packages, and rewrites the imports to the project's aliases.

## Usage

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from './components/ui/button'
import { Dialog, DialogPopup, DialogTitle, DialogTrigger } from './components/ui/dialog'

const open = shallowRef(false)
</script>

<template>
  <Dialog v-model:open="open">
    <DialogTrigger :as="Button" variant="outline">
      Open
    </DialogTrigger>
    <DialogPopup>
      <DialogTitle>Hello</DialogTitle>
    </DialogPopup>
  </Dialog>
</template>
```

### Differences from coss ui (React)

| coss ui (React)                         | cossui-vue                                                          |
| --------------------------------------- | ------------------------------------------------------------------- |
| `render={<Button variant="outline" />}` | `:as="Button" variant="outline"`, or the `#render="{ props }"` slot |
| `className`                             | `class` (merged with `cn`)                                          |
| `open` + `onOpenChange`                 | `v-model:open`, or `@open-change` (the event names of Vase UI)      |
| `value` + `onValueChange`               | `v-model:value`; checkboxes and switches use `v-model:checked`      |
| children as a function                  | scoped slots                                                        |

The `v-model` arguments are those of the Vase UI part, so the Vase UI docs apply as they are.

## Conventions

These rules keep the port idiomatic Vue and not a transcript of the React code.

### Files

- One SFC per part: `src/components/ui/dialog/DialogPopup.vue`. `index.ts` exports the public names.
- Export the same names as coss ui, including its aliases (`DialogContent` for `DialogPopup`).
- `cva` variants go in `variants.ts` next to the SFCs, and `index.ts` re-exports them.
- A part that coss ui re-exports unchanged (`Dialog = DialogPrimitive.Root`, `DialogPortal`) is
  re-exported from `index.ts`, with no SFC. `index.ts` also exports the Vase UI namespace as
  `XxxPrimitive`, as coss ui does.
- Relative imports only. No path aliases, no auto-imports.

### A wrapper of a Vase UI part

```vue
<script setup lang="ts">
import type { DialogTitleProps } from '@vase-ui/vue/dialog'
import type { HTMLAttributes } from 'vue'
import { Dialog as DialogPrimitive } from '@vase-ui/vue/dialog'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ DialogTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DialogPrimitive.Title
    data-slot="dialog-title"
    :class="cn('font-bold font-heading text-xl leading-none', props.class)"
  >
    <slot />
  </DialogPrimitive.Title>
</template>
```

- Import the Vase UI namespace as `XxxPrimitive` and render `<XxxPrimitive.Part>`.
- Extend the props of the part behind `/* @vue-ignore */`. They stay in `$attrs` and fall through
  to the part, so Vue applies the Boolean rules of the part, and the editor still types them.
- Declare only the props the wrapper reads: `class`, coss-only props (`showCloseButton`, `size`,
  `variant`), and props of the part that coss ui sets a default for. Read them as `props.x`. Do not
  destructure props.
- A coss-only Boolean prop with default `true` uses `withDefaults`. When you redeclare a Boolean prop
  of the part, give it a default (the coss one) so Vue's `false` cast does not replace the part default.
- Set `data-slot` on each element, with the values of coss ui. Selectors such as
  `in-[[data-slot=dialog-popup]]` depend on them.
- When the root of the wrapper is not the part that coss ui spreads `{...props}` on (a popup inside a
  portal and a positioner), set `defineOptions({ inheritAttrs: false })` and bind `v-bind="$attrs"`
  on that part.
- Listeners and `v-model` need no code: undeclared events fall through like attributes.
- Forward the default slot with `<slot />`.

### React patterns and their Vue form

| React                                           | Vue                                                                                                      |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `useRender({ render, defaultTagName })`         | a plain element, or `useRender` of `@vase-ui/vue/use-render` when consumers need `as` (see `Button.vue`) |
| `render={<Button size="icon" />}` inside a part | `<template #render="{ props: p }"><Button v-bind="p" size="icon" /></template>`                          |
| `portalProps`, `closeProps`                     | object props bound with `v-bind`                                                                         |
| `useState`, `useMemo`, `useEffect`              | `shallowRef`, `computed`, `watch`; VueUse where it fits                                                  |
| `React.createContext`                           | `provide` / `inject` with a typed `InjectionKey`                                                         |
| `lucide-react`                                  | `@lucide/vue` (same icon names)                                                                          |
