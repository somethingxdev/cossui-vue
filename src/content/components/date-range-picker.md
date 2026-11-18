---
preview: date-range-picker-1
---

## Usage

```ts
import {
  DateRangePicker,
  DateRangePickerCalendar,
  DateRangePickerField,
  DateRangePickerPopup,
} from '@/components/ui/date-range-picker'
```

```vue
<DateRangePicker>
  <DateRangePickerField aria-label="Dates" />
  <DateRangePickerPopup aria-label="Choose dates">
    <DateRangePickerCalendar />
  </DateRangePickerPopup>
</DateRangePicker>
```

## API Reference

This component wraps Vase UI's DateRangePicker. Dates are [Temporal](https://tc39.es/proposal-temporal/docs/) values.

### DateRangePicker

The root. It holds the range and the open state of the popup.

| Prop                      | Type                                                               | Default | Description                                               |
| ------------------------- | ------------------------------------------------------------------ | ------- | --------------------------------------------------------- |
| `value` / `v-model:value` | `[Temporal.PlainDate \| null, Temporal.PlainDate \| null] \| null` | -       | The first and the last day of the range                   |
| `defaultValue`            | same as `value`                                                    | -       | The range when uncontrolled                               |
| `open` / `v-model:open`   | `boolean`                                                          | -       | Whether the popup is open                                 |
| `closeOnSelect`           | `boolean`                                                          | `true`  | Whether the second press in the calendar closes the popup |
| `granularity`             | `"day" \| "hour" \| "minute" \| "second"`                          | `"day"` | The last unit the fields show                             |
| `minDate` / `maxDate`     | `Temporal.PlainDate`                                               | -       | The earliest and latest selectable dates                  |
| `unavailableDates`        | `DateMatcher`                                                      | -       | Dates the picker refuses                                  |
| `disabled`                | `boolean`                                                          | `false` | Ignore user interaction                                   |
| `startName` / `endName`   | `string`                                                           | -       | Names of the hidden inputs for forms                      |

### DateRangePickerField

Two segmented date inputs for the start and the end, with a calendar trigger button. Takes `size`: `"sm" | "default" | "lg"`. Its `id` goes to the start input, so that a `Label` can point to it.

### DateRangePickerTrigger

A button that opens the popup. Use the `as` prop to render it as a `Button`.

### DateRangePickerPopup

The popup. Takes `side`, `align`, `sideOffset` and `alignOffset`.

### DateRangePickerCalendar

The calendar inside the popup. Takes the props of [Range Calendar](/docs/components/range-calendar) except the value, e.g. `numberOfMonths` and `captionLayout`.

## Examples

### With Trigger Button

<ComponentPreview name="date-range-picker-2" />

### Min and Max Dates

<ComponentPreview name="date-range-picker-3" />

### Sizes

<ComponentPreview name="date-range-picker-4" />
