---
preview: date-picker-1
---

## Usage

```ts
import { CalendarIcon } from '@lucide/vue'
import { formatDate } from '@ui-sdk/vue/date'
import { shallowRef } from 'vue'

import { Button } from '@/components/ui/button'
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerPopup,
  DatePickerTrigger,
} from '@/components/ui/date-picker'
```

```vue
<script setup lang="ts">
const date = shallowRef<string | null>(null)
</script>

<template>
  <DatePicker v-model:value="date">
    <DatePickerTrigger
      :as="Button"
      class="w-[280px] justify-start text-left font-normal"
      variant="outline"
    >
      <CalendarIcon />
      <span v-if="date">{{ formatDate(date, 'en-US', { dateStyle: 'long' }) }}</span>
      <span v-else>Pick a date</span>
    </DatePickerTrigger>
    <DatePickerPopup align="start">
      <DatePickerCalendar />
    </DatePickerPopup>
  </DatePicker>
</template>
```

## API Reference

This component wraps UI SDK's [Date Picker](https://ui-sdk.dev/docs/components/date-picker). Dates are ISO strings like `"2026-10-16"`. The popup sits in the browser's top layer, so there is no portal.

### DatePicker

The root. It holds the value, the open state of the popup and the options of the calendar.

| Prop                      | Type                | Default   | Description                                                            |
| ------------------------- | ------------------- | --------- | ---------------------------------------------------------------------- |
| `value` / `v-model:value` | `string \| null`    | -         | The selected date                                                      |
| `defaultValue`            | `string \| null`    | -         | The selected date when uncontrolled                                    |
| `open` / `v-model:open`   | `boolean`           | -         | Whether the popup is open                                              |
| `month` / `v-model:month` | `string`            | -         | The first month the calendar shows, like `"2026-10"`                   |
| `months`                  | `number`            | `1`       | Number of months the calendar shows side by side                       |
| `pageBy`                  | `"month" \| "page"` | `"month"` | Whether the navigation buttons move by one month or by `months` months |
| `closeOnSelect`           | `boolean`           | `true`    | Whether selecting a day closes the popup                               |
| `min` / `max`             | `string`            | -         | The earliest and latest selectable dates                               |
| `unavailable`             | `DateMatchers`      | -         | Dates the picker refuses                                               |
| `disabled`                | `boolean`           | `false`   | Ignore user interaction                                                |
| `name`                    | `string`            | -         | Name of the hidden input for forms                                     |

For the full list of props, see the [UI SDK Date Picker documentation](https://ui-sdk.dev/docs/components/date-picker).

### DatePickerTrigger

A button that opens the popup. Use the `as` prop to render it as a `Button`.

### DatePickerField

A text input with a calendar trigger button. The user types a date in the format of the page's language, and Enter or leaving the input commits it. Takes `size`: `"sm" | "default" | "lg"`. Its other attributes, like `id` and `placeholder`, go to the input.

### DatePickerPopup

The popup. Takes `side`, `align`, `sideOffset`, `alignOffset`, `anchor` and `collisionPadding`.

### DatePickerCalendar

The calendar inside the popup. Takes `captionLayout`, `showWeekNumber`, `classNames` and the `day` slot of [Calendar](/docs/components/calendar). The other calendar options, like `months`, `month` and `showOutsideDays`, go on `DatePicker`.

For a range of dates, pass `mode="range"` to `DatePicker`. Its `v-model:value` is then a `[start, end]` tuple of ISO dates, or `null`.

## Examples

### Date Range Picker

<ComponentPreview name="date-picker-2" />

### With Dropdown Navigation

Use `caption-layout="dropdown"` for date of birth or historical date selection:

<ComponentPreview name="date-picker-3" />

### With Presets

<ComponentPreview name="date-picker-4" />

### With Input

<ComponentPreview name="date-picker-5" />

### Close on Select

Control the popover state to close it when a date is selected:

<ComponentPreview name="date-picker-6" />
