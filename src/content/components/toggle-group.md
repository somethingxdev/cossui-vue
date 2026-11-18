---
preview: toggle-group-1
---

## Usage

```ts
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
```

```vue
<ToggleGroup>
  <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
  <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
  <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
</ToggleGroup>
```

## API Reference

### ToggleGroup

Root component. Styled wrapper for `ToggleGroup` from Vase UI. Provides shared variant and size to child toggles via provide/inject. Supports `v-model:value`.

| Prop          | Type                         | Default        | Description                               |
| ------------- | ---------------------------- | -------------- | ----------------------------------------- |
| `variant`     | `"default" \| "outline"`     | `"default"`    | Controls the styling of all child toggles |
| `size`        | `"default" \| "sm" \| "lg"`  | `"default"`    | Controls the size of all child toggles    |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Layout direction of the group             |

### ToggleGroupItem

Individual toggle button within the group. Styled wrapper for `Toggle` from Vase UI. Inherits variant and size from the parent ToggleGroup.

### ToggleGroupSeparator

Visual separator between toggle buttons.

| Prop          | Type                         | Default      | Description                                                     |
| ------------- | ---------------------------- | ------------ | --------------------------------------------------------------- |
| `orientation` | `"horizontal" \| "vertical"` | `"vertical"` | Separator direction; use `"horizontal"` inside a vertical group |

## Examples

### Small Toggles

<ComponentPreview name="toggle-group-2" />

### Large Toggles

<ComponentPreview name="toggle-group-3" />

### With Outline Toggles

<ComponentPreview name="toggle-group-4" />

### Vertical

<ComponentPreview name="toggle-group-5" />

### Disabled

<ComponentPreview name="toggle-group-6" />

### With Disabled Toggle

<ComponentPreview name="toggle-group-7" />

### Multiple selection

<ComponentPreview name="toggle-group-8" />

### With Tooltips

<ComponentPreview name="toggle-group-9" />
