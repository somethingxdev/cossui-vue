---
preview: date-picker-1
---

## Usage

```ts
import { CalendarIcon } from '@lucide/vue'
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
const date = shallowRef<Temporal.PlainDate | null>(null)
</script>

<template>
  <DatePicker v-model:value="date">
    <DatePickerTrigger
      :as="Button"
      class="w-[280px] justify-start text-left font-normal"
      variant="outline"
    >
      <CalendarIcon />
      <span v-if="date">{{ date.toLocaleString('en-US', { dateStyle: 'long' }) }}</span>
      <span v-else>Pick a date</span>
    </DatePickerTrigger>
    <DatePickerPopup align="start">
      <DatePickerCalendar />
    </DatePickerPopup>
  </DatePicker>
</template>
```

## API Reference

This component wraps Vase UI's DatePicker. Dates are [Temporal](https://tc39.es/proposal-temporal/docs/) values.

### DatePicker

The root. It holds the value and the open state of the popup.

| Prop                      | Type                                                                             | Default           | Description                              |
| ------------------------- | -------------------------------------------------------------------------------- | ----------------- | ---------------------------------------- |
| `value` / `v-model:value` | `Temporal.PlainDate \| Temporal.PlainDateTime \| Temporal.ZonedDateTime \| null` | -                 | The selected date                        |
| `defaultValue`            | same as `value`                                                                  | -                 | The selected date when uncontrolled      |
| `open` / `v-model:open`   | `boolean`                                                                        | -                 | Whether the popup is open                |
| `closeOnSelect`           | `boolean`                                                                        | `true` for a date | Whether selecting a day closes the popup |
| `minDate` / `maxDate`     | `Temporal.PlainDate`                                                             | -                 | The earliest and latest selectable dates |
| `unavailableDates`        | `DateMatcher`                                                                    | -                 | Dates the picker refuses                 |
| `disabled`                | `boolean`                                                                        | `false`           | Ignore user interaction                  |
| `name`                    | `string`                                                                         | -                 | Name of the hidden input for forms       |

### DatePickerTrigger

A button that opens the popup. Use the `as` prop to render it as a `Button`.

### DatePickerField

A segmented date input with a calendar trigger button. Takes `size`: `"sm" | "default" | "lg"`.

### DatePickerPopup

The popup. Takes `side`, `align`, `sideOffset` and `alignOffset`.

### DatePickerCalendar

The calendar inside the popup. Takes the props of [Calendar](/docs/components/calendar) except the value, e.g. `captionLayout`, `numberOfMonths` and `v-model:month`.

For a range of dates, use `DateRangePicker` from `@/components/ui/date-range-picker`.

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
