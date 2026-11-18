---
preview: select-1
---

## Usage

```ts
import {
  Select,
  SelectItem,
  SelectLabel,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
```

```vue
<script setup lang="ts">
const items = [
  { label: 'Select framework', value: null },
  { label: 'Next.js', value: 'next' },
  { label: 'Vite', value: 'vite' },
  { label: 'Astro', value: 'astro' },
]
</script>

<template>
  <Select :items="items">
    <SelectTrigger>
      <SelectValue />
    </SelectTrigger>
    <SelectPopup>
      <SelectLabel>Frameworks</SelectLabel>
      <SelectItem v-for="item in items" :key="item.value" :value="item">
        {{ item.label }}
      </SelectItem>
    </SelectPopup>
  </Select>
</template>
```

## API Reference

### Select

Root component. Alias for `Select.Root` from Vase UI. Supports `v-model:value` and `v-model:open`.

### SelectTrigger

Trigger button that opens the select dropdown. Styled wrapper for `Select.Trigger` from Vase UI.

| Prop   | Type                        | Default     | Description                      |
| ------ | --------------------------- | ----------- | -------------------------------- |
| `size` | `"sm" \| "default" \| "lg"` | `"default"` | Controls the size of the trigger |

### SelectValue

Displays the selected value. Styled wrapper for `Select.Value` from Vase UI. Use the default slot (`v-slot="{ value }"`) to render the value yourself.

### SelectPopup

Popup container for select options. Also exported as `SelectContent`.

| Prop                   | Type                                                                       | Default    | Description                                                                                              |
| ---------------------- | -------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------- |
| `alignItemWithTrigger` | `boolean`                                                                  | `true`     | Aligns the selected item with the trigger                                                                |
| `sideOffset`           | `number`                                                                   | `4`        | Distance from the trigger in pixels                                                                      |
| `side`                 | `"top" \| "bottom" \| "left" \| "right" \| "inline-start" \| "inline-end"` | `"bottom"` | Side of the trigger to place the popup on                                                                |
| `align`                | `"start" \| "center" \| "end"`                                             | `"start"`  | Alignment of the popup relative to the trigger                                                           |
| `alignOffset`          | `number`                                                                   | `0`        | Offset along the alignment axis in pixels                                                                |
| `anchor`               | `Element \| null`                                                          | -          | Element to position the popup against                                                                    |
| `portalProps`          | `SelectPortalProps`                                                        | -          | Props forwarded to the internal portal (`keepMounted`, `container`, etc.); see Vase UI Select portal API |

### SelectItem

Individual select option. Styled wrapper for `Select.Item` from Vase UI with built-in indicator.

### SelectGroup

Groups related select items. Alias for `Select.Group` from Vase UI.

### SelectLabel

Label for all options in the popup. Styled wrapper for `Select.Label` from Vase UI. Clicking it focuses the select trigger without opening the popup.

### SelectGroupLabel

Label for a select group. Styled wrapper for `Select.GroupLabel` from Vase UI.

### SelectSeparator

Visual separator between items. Styled wrapper for `Select.Separator` from Vase UI.

### SelectButton

A standalone button styled like a `SelectTrigger`. Pass it to the `as` prop of other trigger components (e.g., `ComboboxTrigger`, `MenuTrigger`) to give them select-like appearance.

| Prop   | Type                        | Default     | Description                                |
| ------ | --------------------------- | ----------- | ------------------------------------------ |
| `size` | `"sm" \| "default" \| "lg"` | `"default"` | Controls the size of the button            |
| `as`   | `string \| Component`       | `"button"`  | Render as a different element or component |

```ts
import { SelectButton } from '@/components/ui/select'
```

```vue
<ComboboxTrigger :as="SelectButton">
  <ComboboxValue placeholder="Select a fruit" />
</ComboboxTrigger>
```

## Examples

For accessible labelling and validation, prefer using the `Field` component to wrap selects. See the related example: [Select field](/docs/components/field#select-field).

### Small Size

<ComponentPreview name="select-2" />

### Large Size

<ComponentPreview name="select-3" />

### Disabled

<ComponentPreview name="select-4" />

### Without Item Alignment

<ComponentPreview name="select-5" />

### With Groups

<ComponentPreview name="select-6" />

### With Label

<ComponentPreview name="select-23" />

### Multiple Selection

<ComponentPreview name="select-7" />

### With Icon

<ComponentPreview name="select-8" />

### Options with Icon

<ComponentPreview name="select-9" />

### With Object Values

<ComponentPreview name="select-10" />

### SelectButton with Combobox

Use `SelectButton` as the `as` prop on `ComboboxTrigger` to create a combobox that looks like a select.

<ComponentPreview name="combobox-18" />

### Form Integration

<ComponentPreview name="select-11" />
