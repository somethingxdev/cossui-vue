---
preview: combobox-1
---

## Usage

### Single Selection

```ts
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from '@/components/ui/combobox'
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
  <Combobox :items="items">
    <ComboboxInput placeholder="Select an item..." />
    <ComboboxPopup>
      <ComboboxEmpty>No results found.</ComboboxEmpty>
      <ComboboxList>
        <template #item="{ item }">
          <ComboboxItem :key="item.value" :value="item.value">
            {{ item.label }}
          </ComboboxItem>
        </template>
      </ComboboxList>
    </ComboboxPopup>
  </Combobox>
</template>
```

Each entry of `items` is `{ value, label }`, with optional `keywords` and `disabled`. The selected value is the entry's `value`. When your source objects have another shape, map them once:

```vue
<script setup lang="ts">
const users = [
  { id: 'ada', name: 'Ada Lovelace' },
  { id: 'grace', name: 'Grace Hopper' },
]

const userItems = users.map(user => ({ value: user.id, label: user.name }))
</script>

<template>
  <Combobox default-value="ada" :items="userItems">
    <ComboboxInput placeholder="Select a user..." />
    <ComboboxPopup>
      <ComboboxList>
        <template #item="{ item }">
          <ComboboxItem :key="item.value" :value="item.value">
            {{ item.label }}
          </ComboboxItem>
        </template>
      </ComboboxList>
    </ComboboxPopup>
  </Combobox>
</template>
```

### Multiple Selection

```ts
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxValue,
} from '@/components/ui/combobox'
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
  <Combobox :items="items" multiple>
    <ComboboxChips>
      <ComboboxValue v-slot="{ value }">
        <ComboboxChip v-for="item in value" :key="item" :value="item" />
        <ComboboxChipsInput
          :placeholder="value.length > 0 ? undefined : 'Select an item...'"
          aria-label="Select an item"
        />
      </ComboboxValue>
    </ComboboxChips>
    <ComboboxPopup>
      <ComboboxEmpty>No results found.</ComboboxEmpty>
      <ComboboxList>
        <template #item="{ item }">
          <ComboboxItem :key="item.value" :value="item.value">
            {{ item.label }}
          </ComboboxItem>
        </template>
      </ComboboxList>
    </ComboboxPopup>
  </Combobox>
</template>
```

## API Reference

### Combobox

The root combobox component. Manages the combobox state and provides context to child components. Supports `v-model:value`, `v-model:open` and `v-model:query`. Built on the [UI SDK Combobox](https://ui-sdk.dev/docs/components/combobox).

| Prop         | Type                 | Description                                                                                                         |
| ------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `items`      | `ListData`           | The items as data: `{ value, label }` entries, `{ type: 'group', label, items }` groups and `{ type: 'separator' }` |
| `multiple`   | `boolean`            | Whether to allow multiple selection; the value is then an array                                                     |
| `open`       | `boolean`            | Controls whether the popup is open                                                                                  |
| `filter`     | `ListFilter`         | `"contains"` (default), `"startsWith"`, a function, or `false` for server-filtered results                          |
| `controller` | `ComboboxController` | Opens, closes, reads and sets the combobox from outside; create it with `createComboboxController()`                |
| `...props`   | `ComboboxOptions`    | All UI SDK Combobox props are supported                                                                             |

### ComboboxInput

The input field component for single selection mode with extended features for size variants and addon support.

| Prop           | Type                        | Default     | Description                                                                                     |
| -------------- | --------------------------- | ----------- | ----------------------------------------------------------------------------------------------- |
| `size`         | `"sm" \| "default" \| "lg"` | `"default"` | The size variant of the input field                                                             |
| `showTrigger`  | `boolean`                   | `true`      | Whether to display a trigger button (chevron icon) on the right side of the input               |
| `showClear`    | `boolean`                   | `false`     | Whether to display a clear button (X icon) on the right side of the input when there is a value |
| `triggerProps` | `ComboboxTriggerProps`      | -           | Props forwarded to the internal trigger button, useful for overriding `aria-label`              |
| `clearProps`   | `ComboboxClearProps`        | -           | Props forwarded to the internal clear button, useful for overriding `aria-label`                |
| `class`        | `string`                    | -           | Additional CSS classes to apply to the component                                                |
| `...props`     | UI SDK Combobox Input props | -           | All standard input attributes are supported                                                     |

| Slot          | Description                                                               |
| ------------- | ------------------------------------------------------------------------- |
| `start-addon` | Element to display at the start (left side) of the input, such as an icon |

### ComboboxPopup

The popup container that displays the combobox options.

| Prop                                                       | Type                          | Description                                                                                                                                         |
| ---------------------------------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `class`                                                    | `string`                      | Additional CSS classes to apply to the component                                                                                                    |
| `side` / `sideOffset` / `align` / `alignOffset` / `anchor` | UI SDK Combobox Content props | Positioning of the popup (defaults: `"bottom"`, `4`, `"start"`). The popup lines up with the input, the chips, or a standalone `ComboboxTrigger`    |
| `...props`                                                 | UI SDK Combobox Content props | `keepMounted`, `container`, `collisionPadding` and the other content props are supported. The popup renders in the top layer, so there is no portal |

### ComboboxList

A scrollable container for combobox items. Use the `#item="{ item }"` slot to render each visible entry of the root's `items` (an item, or a group with its own `items`), or render `ComboboxItem`s in the default slot yourself.

| Prop       | Type                       | Description                                         |
| ---------- | -------------------------- | --------------------------------------------------- |
| `class`    | `string`                   | Additional CSS classes to apply to the component    |
| `...props` | UI SDK Combobox List props | All standard combobox list attributes are supported |

### ComboboxItem

An individual selectable combobox item.

| Prop       | Type                       | Description                                                                        |
| ---------- | -------------------------- | ---------------------------------------------------------------------------------- |
| `value`    | `unknown`                  | The value of the item: a string, or any value with `itemToValue` on the root       |
| `label`    | `string`                   | The text the input shows and filtering matches, when the content is not plain text |
| `class`    | `string`                   | Additional CSS classes to apply to the component                                   |
| `...props` | UI SDK Combobox Item props | All standard combobox item attributes are supported                                |

### ComboboxEmpty

Displays a message when no results are found.

| Prop       | Type                        | Description                                          |
| ---------- | --------------------------- | ---------------------------------------------------- |
| `class`    | `string`                    | Additional CSS classes to apply to the component     |
| `...props` | UI SDK Combobox Empty props | All standard combobox empty attributes are supported |

### ComboboxGroup

Groups related combobox items together.

| Prop       | Type                        | Description                                          |
| ---------- | --------------------------- | ---------------------------------------------------- |
| `class`    | `string`                    | Additional CSS classes to apply to the component     |
| `...props` | UI SDK Combobox Group props | All standard combobox group attributes are supported |

### ComboboxGroupLabel

Displays a label for a combobox group.

| Prop       | Type                              | Description                                                |
| ---------- | --------------------------------- | ---------------------------------------------------------- |
| `class`    | `string`                          | Additional CSS classes to apply to the component           |
| `...props` | UI SDK Combobox Group Label props | All standard combobox group label attributes are supported |

### ComboboxChips

Container for displaying selected chips in multiple selection mode.

| Prop       | Type                        | Description                                      |
| ---------- | --------------------------- | ------------------------------------------------ |
| `class`    | `string`                    | Additional CSS classes to apply to the component |
| `...props` | UI SDK Combobox Chips props | All standard div attributes are supported        |

| Slot          | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| `start-addon` | Element to display at the start (left side) of the chips area |

### ComboboxChipsInput

The input field component for use inside `ComboboxChips` in multiple selection mode. This is a minimal input without the wrapper, trigger, or clear button.

| Prop       | Type                        | Default     | Description                                          |
| ---------- | --------------------------- | ----------- | ---------------------------------------------------- |
| `size`     | `"sm" \| "default" \| "lg"` | `"default"` | The size variant of the input field                  |
| `class`    | `string`                    | -           | Additional CSS classes to apply to the component     |
| `...props` | UI SDK Combobox Input props | -           | All standard combobox input attributes are supported |

### ComboboxChip

An individual chip representing a selected item in multiple selection mode.

| Prop          | Type                       | Description                                                                                |
| ------------- | -------------------------- | ------------------------------------------------------------------------------------------ |
| `value`       | `unknown`                  | The selected value this chip stands for. Without content, the chip shows the value's label |
| `removeProps` | `ComboboxChipRemoveProps`  | Props forwarded to the internal remove button, useful for overriding `aria-label`          |
| `class`       | `string`                   | Additional CSS classes to apply to the component                                           |
| `...props`    | UI SDK Combobox Chip props | All standard combobox chip attributes are supported                                        |

### ComboboxValue

Provides access to the current value for custom rendering through its default slot (`v-slot="{ value, state }"`; `state.labels` holds the labels). Without a slot it renders the selected label, or `placeholder`.

| Prop          | Type                        | Description                                  |
| ------------- | --------------------------- | -------------------------------------------- |
| `placeholder` | `string`                    | Text shown while nothing is selected         |
| `...props`    | UI SDK Combobox Value props | `maxLabels` and `getMoreLabel` are supported |

## Examples

### Disabled

<ComponentPreview name="combobox-2" />

### Small Size

<ComponentPreview name="combobox-3" />

### Large Size

<ComponentPreview name="combobox-4" />

### With Label

<ComponentPreview name="combobox-5" />

### Auto Highlight

Automatically highlight the first matching option.

<ComponentPreview name="combobox-6" />

### With Clear Button

<ComponentPreview name="combobox-7" />

### With Groups

<ComponentPreview name="combobox-8" />

### With Multiple Selection

<ComponentPreview name="combobox-9" />

### With Start Addon

Display an icon or other element at the start of the input using the `start-addon` slot.

<ComponentPreview name="combobox-13" />

### With Start Addon - Multiple

Use the `start-addon` slot on `ComboboxChips` to display an icon at the start when using multiple selection.

<ComponentPreview name="combobox-14" />

### With Input Inside Popup

Place `ComboboxInput` inside `ComboboxPopup` and open it with a `ComboboxTrigger`. The popup lines up with the trigger, the search starts empty on every open, and focus returns to the trigger on close.

<ComponentPreview name="combobox-10" />

### With Select-like Button

Use `SelectButton` as the `as` prop on `ComboboxTrigger` to make the combobox trigger look like a select.

<ComponentPreview name="combobox-18" />

### Form Integration

<ComponentPreview name="combobox-11" />

### Form Integration - Multiple

<ComponentPreview name="combobox-12" />
