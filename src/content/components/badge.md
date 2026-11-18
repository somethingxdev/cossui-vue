---
preview: badge-1
---

## Usage

```ts
import { Badge } from '@/components/ui/badge'
```

```vue
<Badge>
Badge
</Badge>
```

## Link

You can use the `as` prop to make another component look like a badge. Here's an example of a link that looks like a badge.

```vue
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <Badge :as="RouterLink" to="/pricing">
    New
  </Badge>
</template>
```

## API Reference

This is a custom component built with plain elements, not a wrapper of a UI SDK part.

### Badge

A badge component with variant and size options.

| Prop      | Type                                                                                                    | Default     | Description                                  |
| --------- | ------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------- |
| `variant` | `"default" \| "destructive" \| "error" \| "info" \| "outline" \| "secondary" \| "success" \| "warning"` | `"default"` | Controls the badge styling and color scheme  |
| `size`    | `"default" \| "sm" \| "lg"`                                                                             | `"default"` | Controls the badge size                      |
| `as`      | `string \| Component`                                                                                   | `"span"`    | Render as a different element (e.g., a link) |

## Examples

### Outline

<ComponentPreview name="badge-2" />

### Secondary

<ComponentPreview name="badge-3" />

### Destructive

<ComponentPreview name="badge-4" />

### Info

<ComponentPreview name="badge-5" />

### Success

<ComponentPreview name="badge-6" />

### Warning

<ComponentPreview name="badge-7" />

### Error

<ComponentPreview name="badge-8" />

### Small

<ComponentPreview name="badge-9" />

### Large

<ComponentPreview name="badge-10" />

### With Icon

<ComponentPreview name="badge-11" />

### With Link

<ComponentPreview name="badge-12" />

### With Count

<ComponentPreview name="badge-13" />
