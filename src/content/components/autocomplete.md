---
preview: autocomplete-1
---

## Usage

```ts
import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from '@/components/ui/autocomplete'
```

```vue
<script setup lang="ts">
const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
]
</script>

<template>
  <Autocomplete :items="items">
    <AutocompleteInput placeholder="Search..." />
    <AutocompletePopup>
      <AutocompleteEmpty>No results found.</AutocompleteEmpty>
      <AutocompleteList>
        <template #item="{ item }">
          <AutocompleteItem :key="item.value" :value="item">
            {{ item.label }}
          </AutocompleteItem>
        </template>
      </AutocompleteList>
    </AutocompletePopup>
  </Autocomplete>
</template>
```

## API Reference

### Autocomplete

The root autocomplete component. Manages the autocomplete state and provides context to child components. Supports `v-model:value` (the input text) and `v-model:open`.

| Prop       | Type                    | Description                                       |
| ---------- | ----------------------- | ------------------------------------------------- |
| `items`    | `readonly unknown[]`    | The array of items to display in the autocomplete |
| `open`     | `boolean`               | Controls whether the popup is open                |
| `...props` | `AutocompleteRootProps` | All Vase UI Autocomplete props are supported      |

### AutocompleteInput

The input field component with extended features for size variants and addon support.

| Prop           | Type                             | Default     | Description                                                                                     |
| -------------- | -------------------------------- | ----------- | ----------------------------------------------------------------------------------------------- |
| `size`         | `"sm" \| "default" \| "lg"`      | `"default"` | The size variant of the input field                                                             |
| `showTrigger`  | `boolean`                        | `false`     | Whether to display a trigger button (chevron icon) on the right side of the input               |
| `showClear`    | `boolean`                        | `false`     | Whether to display a clear button (X icon) on the right side of the input when there is a value |
| `triggerProps` | `AutocompleteTriggerProps`       | -           | Props forwarded to the internal trigger button, useful for overriding `aria-label`              |
| `clearProps`   | `AutocompleteClearProps`         | -           | Props forwarded to the internal clear button, useful for overriding `aria-label`                |
| `class`        | `string`                         | -           | Additional CSS classes to apply to the component                                                |
| `...props`     | Vase UI Autocomplete Input props | -           | All standard autocomplete input attributes are supported                                        |

| Slot          | Description                                                               |
| ------------- | ------------------------------------------------------------------------- |
| `start-addon` | Element to display at the start (left side) of the input, such as an icon |

### AutocompletePopup

The popup container that displays the autocomplete suggestions.

| Prop                                                       | Type                                  | Description                                                                                                                         |
| ---------------------------------------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `class`                                                    | `string`                              | Additional CSS classes to apply to the component                                                                                    |
| `side` / `sideOffset` / `align` / `alignOffset` / `anchor` | Vase UI Autocomplete Positioner props | Positioning of the popup (defaults: `"bottom"`, `4`, `"start"`)                                                                     |
| `portalProps`                                              | `AutocompletePortalProps`             | Props forwarded to the internal portal (`keepMounted`, `container`, etc.); see Vase UI Combobox portal API (autocomplete reuses it) |
| `...props`                                                 | Vase UI Autocomplete Popup props      | All standard autocomplete popup attributes are supported                                                                            |

### AutocompleteList

A scrollable container for autocomplete items. Use the `#item="{ item }"` slot to render each item.

| Prop       | Type                            | Description                                             |
| ---------- | ------------------------------- | ------------------------------------------------------- |
| `class`    | `string`                        | Additional CSS classes to apply to the component        |
| `...props` | Vase UI Autocomplete List props | All standard autocomplete list attributes are supported |

### AutocompleteItem

An individual selectable autocomplete item.

| Prop       | Type                            | Description                                             |
| ---------- | ------------------------------- | ------------------------------------------------------- |
| `value`    | `unknown`                       | The value of the item                                   |
| `class`    | `string`                        | Additional CSS classes to apply to the component        |
| `...props` | Vase UI Autocomplete Item props | All standard autocomplete item attributes are supported |

### AutocompleteEmpty

Displays a message when no results are found.

| Prop       | Type                             | Description                                              |
| ---------- | -------------------------------- | -------------------------------------------------------- |
| `class`    | `string`                         | Additional CSS classes to apply to the component         |
| `...props` | Vase UI Autocomplete Empty props | All standard autocomplete empty attributes are supported |

### AutocompleteGroup

Groups related autocomplete items together.

| Prop       | Type                             | Description                                              |
| ---------- | -------------------------------- | -------------------------------------------------------- |
| `items`    | `readonly unknown[]`             | The array of items in this group                         |
| `class`    | `string`                         | Additional CSS classes to apply to the component         |
| `...props` | Vase UI Autocomplete Group props | All standard autocomplete group attributes are supported |

### AutocompleteGroupLabel

Displays a label for an autocomplete group.

| Prop       | Type                                   | Description                                                    |
| ---------- | -------------------------------------- | -------------------------------------------------------------- |
| `class`    | `string`                               | Additional CSS classes to apply to the component               |
| `...props` | Vase UI Autocomplete Group Label props | All standard autocomplete group label attributes are supported |

### AutocompleteCollection

Used to wrap items within a group for rendering. Use its default slot (`v-slot="{ item }"`) to render each item.

| Prop       | Type                                  | Description                                                   |
| ---------- | ------------------------------------- | ------------------------------------------------------------- |
| `...props` | Vase UI Autocomplete Collection props | All standard autocomplete collection attributes are supported |

## Examples

### Disabled

<ComponentPreview name="autocomplete-2" />

### Small Size

<ComponentPreview name="autocomplete-3" />

### Large Size

<ComponentPreview name="autocomplete-4" />

### With Label

<ComponentPreview name="autocomplete-5" />

### Inline Autocomplete

Autofill the input with the highlighted item while navigating with arrow keys.

<ComponentPreview name="autocomplete-6" />

### Auto Highlight

Automatically highlight the first matching option.

<ComponentPreview name="autocomplete-7" />

### With Clear Button

<ComponentPreview name="autocomplete-8" />

### With Trigger and Clear Buttons

<ComponentPreview name="autocomplete-9" />

### With Start Addon

Display an icon or other element at the start of the input using the `start-addon` slot.

<ComponentPreview name="autocomplete-14" />

### With Groups

<ComponentPreview name="autocomplete-10" />

### With Limit Results

<ComponentPreview name="autocomplete-11" />

### Async Search

<ComponentPreview name="autocomplete-12" />

### Form Integration

<ComponentPreview name="autocomplete-13" />
