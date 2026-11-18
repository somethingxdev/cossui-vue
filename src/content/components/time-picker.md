---
preview: time-picker-1
---

## Usage

```ts
import {
  TimePicker,
  TimePickerField,
  TimePickerList,
  TimePickerPopup,
} from '@/components/ui/time-picker'
```

```vue
<TimePicker>
  <TimePickerField aria-label="Time" />
  <TimePickerPopup aria-label="Choose a time">
    <TimePickerList />
  </TimePickerPopup>
</TimePicker>
```

## API Reference

This component wraps Vase UI's TimePicker. The popup holds a list of times, columns of units, or a [Time Clock](/docs/components/time-clock). Times are [Temporal](https://tc39.es/proposal-temporal/docs/) values.

### TimePicker

The root. It holds the value and the open state of the popup.

| Prop                      | Type                                                                             | Default    | Description                                                                                                                    |
| ------------------------- | -------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `value` / `v-model:value` | `Temporal.PlainTime \| Temporal.PlainDateTime \| Temporal.ZonedDateTime \| null` | -          | The selected time                                                                                                              |
| `defaultValue`            | same as `value`                                                                  | -          | The time when uncontrolled                                                                                                     |
| `open` / `v-model:open`   | `boolean`                                                                        | -          | Whether the popup is open                                                                                                      |
| `closeOnSelect`           | `boolean`                                                                        | -          | Whether a selection closes the popup. A list item and the last commit of the clock close it by default, a column item does not |
| `granularity`             | `"hour" \| "minute" \| "second"`                                                 | `"minute"` | The smallest unit the field shows and the clock selects                                                                        |
| `hourCycle`               | `12 \| 24`                                                                       | locale     | `12` shows a day period, `24` shows none                                                                                       |
| `minTime` / `maxTime`     | `Temporal.PlainTime`                                                             | -          | The earliest and latest times. The list starts and ends at them                                                                |
| `disabled`                | `boolean`                                                                        | `false`    | Ignore user interaction                                                                                                        |
| `name`                    | `string`                                                                         | -          | Name of the hidden input for forms                                                                                             |

### TimePickerField

A segmented time input with a clock trigger button. Takes `size`: `"sm" | "default" | "lg"`.

### TimePickerTrigger

A button that opens the popup. Use the `as` prop to render it as a `Button`.

### TimePickerPopup

The popup. Takes `side`, `align`, `sideOffset` and `alignOffset`.

### TimePickerList

A list of times. Takes `step`, the minutes between two times (default `30`).

### TimePickerColumn

A column of one unit. Takes `unit` (`"hour" | "minute" | "second" | "dayPeriod"`) and `step` (default `1`).

### TimePickerClock

A clock face inside the popup.

## Examples

### Columns

<ComponentPreview name="time-picker-2" />

### Clock

<ComponentPreview name="time-picker-3" />

### Min and Max Times

<ComponentPreview name="time-picker-4" />

### With Trigger Button

<ComponentPreview name="time-picker-5" />
