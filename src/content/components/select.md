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
  { label: 'Next.js', value: 'next' },
  { label: 'Vite', value: 'vite' },
  { label: 'Astro', value: 'astro' },
]
</script>

<template>
  <Select :items="items">
    <SelectLabel>Frameworks</SelectLabel>
    <SelectTrigger>
      <SelectValue placeholder="Select framework" />
    </SelectTrigger>
    <SelectPopup>
      <SelectItem v-for="item in items" :key="item.value" :value="item.value">
        {{ item.label }}
      </SelectItem>
    </SelectPopup>
  </Select>
</template>
```

## API Reference

### Select

Root component. Re-export of `Select` from UI SDK; it renders no element, so put `aria-label` on `SelectTrigger`. Supports `v-model:value` and `v-model:open`, and `item-to-value` / `item-to-label` / `is-item-equal-to-value` for object values. See the [UI SDK Select docs](https://ui-sdk.dev/docs/components/select).

### SelectTrigger

Trigger button that opens the select dropdown. Styled wrapper for `SelectTrigger` from UI SDK.

| Prop   | Type                        | Default     | Description                      |
| ------ | --------------------------- | ----------- | -------------------------------- |
| `size` | `"sm" \| "default" \| "lg"` | `"default"` | Controls the size of the trigger |

### SelectValue

Displays the selected value. Styled wrapper for `SelectValue` from UI SDK; takes `placeholder`. Use the default slot (`v-slot="{ value, label, labels, placeholder }"`) to render the value yourself.

### SelectPopup

Popup container for select options: a styled `SelectContent` from UI SDK with a `SelectList` inside, shown in the browser's top layer (no portal). `class` goes to the list. Also exported as `SelectContent`.

| Prop                   | Type                                                         | Default    | Description                                                                                                |
| ---------------------- | ------------------------------------------------------------ | ---------- | ---------------------------------------------------------------------------------------------------------- |
| `alignItemWithTrigger` | `boolean`                                                    | `true`     | Places the selected item over the trigger; opens below when nothing is selected, on touch, or without room |
| `sideOffset`           | `number`                                                     | `4`        | Distance from the trigger in pixels                                                                        |
| `side`                 | `"top" \| "bottom" \| "left" \| "right" \| "start" \| "end"` | `"bottom"` | Side of the trigger to place the popup on                                                                  |
| `align`                | `"start" \| "center" \| "end"`                               | `"start"`  | Alignment of the popup relative to the trigger                                                             |
| `alignOffset`          | `number`                                                     | `0`        | Offset along the alignment axis in pixels                                                                  |
| `anchor`               | `Element \| string \| null`                                  | -          | Element or CSS selector to position the popup against                                                      |

Other `SelectContent` props (`keepMounted`, `container`, `collisionPadding`) pass through.

### SelectItem

Individual select option. Styled wrapper for `SelectItem` from UI SDK with built-in indicator. `value` is required; pass `label` when the content isn't plain text.

### SelectGroup

Groups related select items. Wrapper for `SelectGroup` from UI SDK.

### SelectLabel

Visible label for the select, placed next to the trigger. Styled wrapper for `SelectLabel` from UI SDK. Clicking it focuses the select trigger without opening the popup.

### SelectGroupLabel

Label for a select group. Styled wrapper for `SelectGroupLabel` from UI SDK.

### SelectSeparator

Visual separator between items. Styled wrapper for `SelectSeparator` from UI SDK.

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
