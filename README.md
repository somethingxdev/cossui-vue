# cossui-vue

[coss ui](https://github.com/cosscom/ui) for Vue: the same styles and component API, built on the
unstyled components of [UI SDK](https://github.com/vercel-labs/ui) (`@ui-sdk/vue` and `@ui-sdk/core`).

Components are source files to copy into your app, like coss ui and shadcn-vue. This repository is
also the docs site: a Vue copy of [coss.com/ui](https://coss.com/ui) with a Vue green accent.

## Structure

| Path                      | What                                                                           |
| ------------------------- | ------------------------------------------------------------------------------ |
| `src/components/ui/`      | 56 components: the ones coss ui documents, on UI SDK parts where one is needed |
| `src/demos/`              | one demo per component, shown in the Preview and Code tabs                     |
| `src/styles/globals.css`  | coss design tokens (light and `.dark`); copy it into your app                  |
| `src/lib/utils.ts`        | `cn`, from the [`cn`](https://github.com/shadcn-ui/cn) package                 |
| `src/site/`, `src/pages/` | the docs site: header, sidebar, Ctrl K search, component pages                 |
| `src/styles/site.css`     | site only: Cal Sans, Vue green accent (`#42b883`)                              |

The card illustrations on the home page are the coss ui thumbnails, ported to Vue. Cal Sans is under the
SIL Open Font License (`src/assets/fonts/CalSans-OFL.txt`).

## Stack

Vue 3.5, TypeScript, Tailwind CSS 4, `@ui-sdk/vue`, `cn`, `class-variance-authority`, `@lucide/vue`,
VueUse, Vue Router, Shiki. Tooling follows Anthony Fu's conventions: `@antfu/eslint-config` with
`antislop`, `vue-tsc`.

```bash
pnpm install
pnpm dev
pnpm run ci # lint + typecheck + build
```

Import `src/styles/globals.css` once. Dates are ISO strings (`"2026-10-16"`), as in UI SDK.

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
| `open` + `onOpenChange`                 | `v-model:open`, or `@open-change` (the event names of UI SDK)       |
| `value` + `onValueChange`               | `v-model:value`; checkboxes and switches use `v-model:checked`      |
| children as a function                  | scoped slots                                                        |

The `v-model` arguments are those of the UI SDK part, so the UI SDK docs apply as they are.

## Conventions

These rules keep the port idiomatic Vue and not a transcript of the React code.

### Files

- One SFC per part: `src/components/ui/dialog/DialogPopup.vue`. `index.ts` exports the public names.
- Export the same names as coss ui, including its aliases (`DialogContent` for `DialogPopup`).
- `cva` variants go in `variants.ts` next to the SFCs, and `index.ts` re-exports them.
- A part that coss ui re-exports unchanged (`Dialog`) is re-exported from `index.ts`, with no SFC.
  `index.ts` also exports the UI SDK entry as `XxxPrimitive`, as coss ui does.
- Relative imports only. No path aliases, no auto-imports.

### A wrapper of a UI SDK part

```vue
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as DialogPrimitive from '@ui-sdk/vue/dialog'
import { cn } from '../../../lib/utils'

type DialogTitleProps = InstanceType<typeof DialogPrimitive.DialogTitle>['$props']

interface Props extends /* @vue-ignore */ DialogTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DialogPrimitive.DialogTitle :class="cn('font-bold font-heading text-xl leading-none', props.class)">
    <slot />
  </DialogPrimitive.DialogTitle>
</template>
```

- Import the UI SDK entry as `XxxPrimitive` and render `<XxxPrimitive.XxxPart>`.
- Extend the props of the part behind `/* @vue-ignore */`. They stay in `$attrs` and fall through
  to the part, so Vue applies the Boolean rules of the part, and the editor still types them.
- Declare only the props the wrapper reads: `class`, coss-only props (`showCloseButton`, `size`,
  `variant`), and props of the part that coss ui sets a default for. Read them as `props.x`. Do not
  destructure props.
- A coss-only Boolean prop with default `true` uses `withDefaults`. When you redeclare a Boolean prop
  of the part, give it a default (the coss one) so Vue's `false` cast does not replace the part default.
- A UI SDK part sets its own `data-slot` (`dialog-content`, where coss ui has `dialog-popup`), and it
  cannot be overridden. Selectors such as `in-[[data-slot=dialog-content]]` use the UI SDK names. Set
  `data-slot` only on plain elements, with the values of coss ui.
- State attributes and CSS variables are those of UI SDK (`data-open`, `--dialog-stack`); the
  "Data Attributes" section of each UI SDK page lists them.
- Popups render in the browser's top layer: there is no portal and no positioner. The popup wrapper
  takes `side`, `align` and the offsets, and carries the classes that place it.
- UI SDK parts have no `as` prop. A wrapper that offers one renders the part through its `#render`
  slot (see `DialogTrigger.vue`).
- When the root of the wrapper is not the part that coss ui spreads `{...props}` on (a popup next to
  its backdrop), set `defineOptions({ inheritAttrs: false })` and bind `v-bind="$attrs"`
  on that part.
- Listeners and `v-model` need no code: undeclared events fall through like attributes.
- Forward the default slot with `<slot />`.

### React patterns and their Vue form

| React                                           | Vue                                                                                          |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `useRender({ render, defaultTagName })`         | a plain element, or `<component :is="props.as">` when consumers need `as` (see `Button.vue`) |
| `render={<Button size="icon" />}` inside a part | `<template #render="{ props: p }"><Button v-bind="p" size="icon" /></template>`              |
| `closeProps`                                    | an object prop bound with `v-bind` (`portalProps` is gone: there is no portal)               |
| `useState`, `useMemo`, `useEffect`              | `shallowRef`, `computed`, `watch`; VueUse where it fits                                      |
| `React.createContext`                           | `provide` / `inject` with a typed `InjectionKey`                                             |
| `lucide-react`                                  | `@lucide/vue` (same icon names)                                                              |
