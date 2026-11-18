---
preview: button-1
---

## Usage

```ts
import { Button } from '@/components/ui/button'
```

```vue
<Button>
Button
</Button>
```

## Link

Use the `as` prop to make another element or component look like a button. Here's a router link that looks like a button.

```vue
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button :as="RouterLink" to="/login">
    Login
  </Button>
</template>
```

## API Reference

This is a custom component, not a wrapper of a UI SDK part. It renders a `button`, or the element or component you pass as `as`.

### Button

A button component with variant, size, and loading states.

| Prop      | Type                                                                                                      | Default     | Description                                                       |
| --------- | --------------------------------------------------------------------------------------------------------- | ----------- | ----------------------------------------------------------------- |
| `variant` | `"default" \| "destructive" \| "destructive-outline" \| "ghost" \| "link" \| "outline" \| "secondary"`    | `"default"` | Controls the button styling                                       |
| `size`    | `"default" \| "icon" \| "icon-lg" \| "icon-sm" \| "icon-xl" \| "icon-xs" \| "lg" \| "sm" \| "xl" \| "xs"` | `"default"` | Controls the button size                                          |
| `loading` | `boolean`                                                                                                 | `false`     | Shows a spinner and forces disabled button behavior while loading |
| `as`      | `string \| Component`                                                                                     | `"button"`  | Render as a different element or component (e.g. `RouterLink`)    |

When `loading` is `true`, the component:

- Renders a spinner (`data-slot="button-loading-indicator"`)
- Adds `data-loading` on the button root
- Forces the native `disabled` attribute
- Sets `aria-disabled="true"`
- Preserves button width by hiding content visually instead of unmounting it

## Examples

### Default

<ComponentPreview name="button-1" />

### Outline

<ComponentPreview name="button-2" />

### Secondary

<ComponentPreview name="button-3" />

### Destructive

<ComponentPreview name="button-4" />

### Destructive Outline

<ComponentPreview name="button-5" />

### Ghost

<ComponentPreview name="button-6" />

### Link

<ComponentPreview name="button-7" />

### Extra-small Size

<ComponentPreview name="button-8" />

### Small Size

<ComponentPreview name="button-9" />

### Large Size

<ComponentPreview name="button-10" />

### Extra-large Size

<ComponentPreview name="button-11" />

### Disabled

<ComponentPreview name="button-12" />

### Icon

<ComponentPreview name="button-13" />

### Icon Small Size

<ComponentPreview name="button-14" />

### Icon Large Size

<ComponentPreview name="button-15" />

### With Icon

<ComponentPreview name="button-16" />

### With Link

<ComponentPreview name="button-17" />

### Loading (Built-in Prop)

<ComponentPreview name="button-41" />

### Loading (Custom Composition)

<ComponentPreview name="button-18" />
