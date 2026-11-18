---
preview: toggle-1
---

## Usage

```ts
import { Toggle } from '@/components/ui/toggle'
```

```vue
<Toggle>
Toggle
</Toggle>
```

## API Reference

### Toggle

Styled wrapper for `Toggle` from [UI SDK](https://ui-sdk.dev/docs/components/toggle) with variant and size options. Supports `v-model:pressed`.

| Prop      | Type                        | Default     | Description                 |
| --------- | --------------------------- | ----------- | --------------------------- |
| `variant` | `"default" \| "outline"`    | `"default"` | Controls the toggle styling |
| `size`    | `"default" \| "sm" \| "lg"` | `"default"` | Controls the toggle size    |

## Examples

### Outline

<ComponentPreview name="toggle-2" />

### With Icon

<ComponentPreview name="toggle-3" />

### Small Size

<ComponentPreview name="toggle-4" />

### Large Size

<ComponentPreview name="toggle-5" />

### Disabled

<ComponentPreview name="toggle-6" />

### Icon Group

<ComponentPreview name="toggle-7" />
