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
  createComboboxItems,
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
          <ComboboxItem :key="item.value" :value="item">
            {{ item.label }}
          </ComboboxItem>
        </template>
      </ComboboxList>
    </ComboboxPopup>
  </Combobox>
</template>
```

When your source items are objects but selection should use a stable primitive value, create a typed collection with `createComboboxItems`:

```vue
<script setup lang="ts">
const users = [
  { id: 'ada', name: 'Ada Lovelace' },
  { id: 'grace', name: 'Grace Hopper' },
]

const userItems = createComboboxItems(users, {
  getLabel: user => user.name,
  getValue: user => user.id,
})
</script>

<template>
  <Combobox default-value="ada" :items="userItems">
    <ComboboxInput placeholder="Select a user..." />
    <ComboboxPopup>
      <ComboboxList>
        <template #item="{ item: user }">
          <ComboboxItem :key="user.id" :value="user.id">
            {{ user.name }}
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
        <ComboboxChip v-for="item in value" :key="item.value" :aria-label="item.value">
          {{ item.label }}
        </ComboboxChip>
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
          <ComboboxItem :value="item">
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

The root combobox component. Manages the combobox state and provides context to child components. Supports `v-model:value`, `v-model:open` and `v-model:inputValue`.

| Prop       | Type                 | Description                                   |
| ---------- | -------------------- | --------------------------------------------- |
| `items`    | `readonly unknown[]` | The array of items to display in the combobox |
| `multiple` | `boolean`            | Whether to allow multiple selection           |
| `open`     | `boolean`            | Controls whether the popup is open            |
| `...props` | `ComboboxRootProps`  | All Vase UI Combobox props are supported      |

### createComboboxItems

Creates a typed item collection that derives primitive selection values and labels from object items. Define static collections outside components and wrap dynamic collections in `computed`.

### ComboboxInput

The input field component for single selection mode with extended features for size variants and addon support.

| Prop           | Type                         | Default     | Description                                                                                     |
| -------------- | ---------------------------- | ----------- | ----------------------------------------------------------------------------------------------- |
| `size`         | `"sm" \| "default" \| "lg"`  | `"default"` | The size variant of the input field                                                             |
| `showTrigger`  | `boolean`                    | `true`      | Whether to display a trigger button (chevron icon) on the right side of the input               |
| `showClear`    | `boolean`                    | `false`     | Whether to display a clear button (X icon) on the right side of the input when there is a value |
| `triggerProps` | `ComboboxTriggerProps`       | -           | Props forwarded to the internal trigger button, useful for overriding `aria-label`              |
| `clearProps`   | `ComboboxClearProps`         | -           | Props forwarded to the internal clear button, useful for overriding `aria-label`                |
| `class`        | `string`                     | -           | Additional CSS classes to apply to the component                                                |
| `...props`     | Vase UI Combobox Input props | -           | All standard combobox input attributes are supported                                            |

| Slot          | Description                                                               |
| ------------- | ------------------------------------------------------------------------- |
| `start-addon` | Element to display at the start (left side) of the input, such as an icon |

### ComboboxPopup

The popup container that displays the combobox options.

| Prop                                                       | Type                              | Description                                                                                                |
| ---------------------------------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `class`                                                    | `string`                          | Additional CSS classes to apply to the component                                                           |
| `side` / `sideOffset` / `align` / `alignOffset` / `anchor` | Vase UI Combobox Positioner props | Positioning of the popup (defaults: `"bottom"`, `4`, `"start"`)                                            |
| `portalProps`                                              | `ComboboxPortalProps`             | Props forwarded to the internal portal (`keepMounted`, `container`, etc.); see Vase UI Combobox portal API |
| `...props`                                                 | Vase UI Combobox Popup props      | All standard combobox popup attributes are supported                                                       |

### ComboboxList

A scrollable container for combobox items. Use the `#item="{ item }"` slot to render each item.

| Prop       | Type                        | Description                                         |
| ---------- | --------------------------- | --------------------------------------------------- |
| `class`    | `string`                    | Additional CSS classes to apply to the component    |
| `...props` | Vase UI Combobox List props | All standard combobox list attributes are supported |

### ComboboxItem

An individual selectable combobox item.

| Prop       | Type                        | Description                                         |
| ---------- | --------------------------- | --------------------------------------------------- |
| `value`    | `unknown`                   | The value of the item                               |
| `class`    | `string`                    | Additional CSS classes to apply to the component    |
| `...props` | Vase UI Combobox Item props | All standard combobox item attributes are supported |

### ComboboxEmpty

Displays a message when no results are found.

| Prop       | Type                         | Description                                          |
| ---------- | ---------------------------- | ---------------------------------------------------- |
| `class`    | `string`                     | Additional CSS classes to apply to the component     |
| `...props` | Vase UI Combobox Empty props | All standard combobox empty attributes are supported |

### ComboboxGroup

Groups related combobox items together.

| Prop       | Type                         | Description                                          |
| ---------- | ---------------------------- | ---------------------------------------------------- |
| `items`    | `readonly unknown[]`         | The array of items in this group                     |
| `class`    | `string`                     | Additional CSS classes to apply to the component     |
| `...props` | Vase UI Combobox Group props | All standard combobox group attributes are supported |

### ComboboxGroupLabel

Displays a label for a combobox group.

| Prop       | Type                               | Description                                                |
| ---------- | ---------------------------------- | ---------------------------------------------------------- |
| `class`    | `string`                           | Additional CSS classes to apply to the component           |
| `...props` | Vase UI Combobox Group Label props | All standard combobox group label attributes are supported |

### ComboboxCollection

Used to wrap items within a group for rendering. Use its default slot (`v-slot="{ item }"`) to render each item.

| Prop       | Type                              | Description                                               |
| ---------- | --------------------------------- | --------------------------------------------------------- |
| `...props` | Vase UI Combobox Collection props | All standard combobox collection attributes are supported |

### ComboboxChips

Container for displaying selected chips in multiple selection mode.

| Prop       | Type                         | Description                                      |
| ---------- | ---------------------------- | ------------------------------------------------ |
| `class`    | `string`                     | Additional CSS classes to apply to the component |
| `...props` | Vase UI Combobox Chips props | All standard div attributes are supported        |

| Slot          | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| `start-addon` | Element to display at the start (left side) of the chips area |

### ComboboxChipsInput

The input field component for use inside `ComboboxChips` in multiple selection mode. This is a minimal input without the wrapper, trigger, or clear button.

| Prop       | Type                         | Default     | Description                                          |
| ---------- | ---------------------------- | ----------- | ---------------------------------------------------- |
| `size`     | `"sm" \| "default" \| "lg"`  | `"default"` | The size variant of the input field                  |
| `class`    | `string`                     | -           | Additional CSS classes to apply to the component     |
| `...props` | Vase UI Combobox Input props | -           | All standard combobox input attributes are supported |

### ComboboxChip

An individual chip representing a selected item in multiple selection mode.

| Prop          | Type                        | Description                                                                       |
| ------------- | --------------------------- | --------------------------------------------------------------------------------- |
| `removeProps` | `ComboboxChipRemoveProps`   | Props forwarded to the internal remove button, useful for overriding `aria-label` |
| `class`       | `string`                    | Additional CSS classes to apply to the component                                  |
| `...props`    | Vase UI Combobox Chip props | All standard combobox chip attributes are supported                               |

### ComboboxValue

Provides access to the current value for custom rendering through its default slot (`v-slot="{ value }"`).

| Prop       | Type                         | Description                                          |
| ---------- | ---------------------------- | ---------------------------------------------------- |
| `...props` | Vase UI Combobox Value props | All standard combobox value attributes are supported |

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

<ComponentPreview name="combobox-10" />

### With Select-like Button

Use `SelectButton` as the `as` prop on `ComboboxTrigger` to make the combobox trigger look like a select.

<ComponentPreview name="combobox-18" />

### Form Integration

<ComponentPreview name="combobox-11" />

### Form Integration - Multiple

<ComponentPreview name="combobox-12" />
