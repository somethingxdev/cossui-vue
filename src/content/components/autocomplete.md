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
          <AutocompleteItem :key="item.value" :value="item.value">
            {{ item.label }}
          </AutocompleteItem>
        </template>
      </AutocompleteList>
    </AutocompletePopup>
  </Autocomplete>
</template>
```

## API Reference

Built on [UI SDK Autocomplete](https://ui-sdk.dev/docs/components/autocomplete). The value of an autocomplete is its text.

### Autocomplete

The root component, re-exported from UI SDK. Manages the state and provides context to child components. Supports `v-model:value` (the input text) and `v-model:open`.

| Prop       | Type                                                         | Description                                                                                              |
| ---------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `items`    | `(string \| { value: string, label: string })[]`             | Items as data, for the `#item` slot of `AutocompleteList`. Not needed when you render the items yourself |
| `filter`   | `"contains" \| "startsWith" \| "fuzzy" \| function \| false` | How typing narrows the items; `false` for results a server already filtered                              |
| `...props` | UI SDK Autocomplete props                                    | `inlineComplete`, `autoHighlight`, `openOnFocus`, `status`, `disabled`, `required`, …                    |

### AutocompleteInput

The input field component with extended features for size variants and addon support.

| Prop           | Type                        | Default     | Description                                                                                     |
| -------------- | --------------------------- | ----------- | ----------------------------------------------------------------------------------------------- |
| `size`         | `"sm" \| "default" \| "lg"` | `"default"` | The size variant of the input field                                                             |
| `showTrigger`  | `boolean`                   | `false`     | Whether to display a trigger button (chevron icon) on the right side of the input               |
| `showClear`    | `boolean`                   | `false`     | Whether to display a clear button (X icon) on the right side of the input when there is a value |
| `triggerProps` | `object`                    | -           | Attributes forwarded to the internal trigger button, useful for overriding `aria-label`         |
| `clearProps`   | `object`                    | -           | Attributes forwarded to the internal clear button, useful for overriding `aria-label`           |
| `class`        | `string`                    | -           | Additional CSS classes to apply to the component                                                |
| `...attrs`     | native input attributes     | -           | Passed to the UI SDK `AutocompleteInput`                                                        |

| Slot          | Description                                                               |
| ------------- | ------------------------------------------------------------------------- |
| `start-addon` | Element to display at the start (left side) of the input, such as an icon |

### AutocompletePopup

The popup that displays the suggestions: a styled `AutocompleteContent` from UI SDK, shown in the browser's top layer (no portal).

| Prop                                                       | Type                               | Description                                                     |
| ---------------------------------------------------------- | ---------------------------------- | --------------------------------------------------------------- |
| `class`                                                    | `string`                           | Additional CSS classes to apply to the component                |
| `side` / `sideOffset` / `align` / `alignOffset` / `anchor` | UI SDK `AutocompleteContent` props | Positioning of the popup (defaults: `"bottom"`, `4`, `"start"`) |
| `...props`                                                 | UI SDK `AutocompleteContent` props | `keepMounted`, `container`, `collisionPadding`                  |

### AutocompleteList

A scrollable container for autocomplete items. Render the items in the default slot (it receives `{ state }`, with the matching `state.items`), or use the `#item="{ item }"` slot to render each matching entry of the root's `items`.

### AutocompleteItem

An individual suggestion.

| Prop       | Type                            | Description                                                                      |
| ---------- | ------------------------------- | -------------------------------------------------------------------------------- |
| `value`    | `string`                        | Identifies the item. Choosing it fills the input with its `label`, or its text   |
| `label`    | `string`                        | The text the input gets and filtering matches, when the content isn't plain text |
| `class`    | `string`                        | Additional CSS classes to apply to the component                                 |
| `...props` | UI SDK `AutocompleteItem` props | `keywords`, `disabled`, `index`                                                  |

### AutocompleteEmpty

Displays a message when no results are found. The default slot receives `{ state }` (`empty`, `loading`, `query`).

### AutocompleteStatus

A polite live region for loading and result counts. The default slot receives `{ state }` (`status`, `loading`, `count`).

### AutocompleteGroup

Groups related items. Render its items inside it; filtering hides empty groups.

### AutocompleteGroupLabel

Displays a label for an autocomplete group.

### AutocompleteSeparator

A divider between items or groups.

### Filtering yourself

There is no `useAutocompleteFilter`, `AutocompleteCollection`, `AutocompleteValue` or `AutocompleteRow`: use the root's `filter` prop, `matchRanges` from `@ui-sdk/vue/text-match`, and `useAsyncOptions` from `@ui-sdk/vue/async-options` for server results.

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
