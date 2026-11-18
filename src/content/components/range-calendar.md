---
preview: range-calendar-1
---

## Usage

```ts
import { RangeCalendar } from '@/components/ui/range-calendar'
```

```vue
<RangeCalendar />
```

## API Reference

This component wraps Vase UI's RangeCalendar with the styling of [Calendar](/docs/components/calendar). Dates are [Temporal](https://tc39.es/proposal-temporal/docs/) values.

### RangeCalendar

A calendar for selecting a range of dates. The first press sets the start, the second press sets the end.

| Prop                       | Type                                                       | Default   | Description                                                    |
| -------------------------- | ---------------------------------------------------------- | --------- | -------------------------------------------------------------- |
| `value` / `v-model:value`  | `[Temporal.PlainDate \| null, Temporal.PlainDate \| null]` | -         | The first and the last day of the range                        |
| `defaultValue`             | same as `value`                                            | -         | The range when uncontrolled                                    |
| `minDays`                  | `number`                                                   | -         | The least number of days of a range (both ends count)          |
| `maxDays`                  | `number`                                                   | -         | The greatest number of days of a range                         |
| `allowNonContiguousRanges` | `boolean`                                                  | `false`   | Whether a range can cross a disabled or unavailable day        |
| `numberOfMonths`           | `number`                                                   | `1`       | Number of months shown side by side                            |
| `pagedNavigation`          | `boolean`                                                  | `false`   | Whether the navigation buttons move by `numberOfMonths` months |
| `captionLayout`            | `"label" \| "dropdown"`                                    | `"label"` | Caption layout - use `"dropdown"` for month/year dropdowns     |
| `showOutsideDays`          | `boolean`                                                  | `true`    | Show days from adjacent months                                 |
| `showWeekNumber`           | `boolean`                                                  | `false`   | Show the week number column                                    |
| `minDate` / `maxDate`      | `Temporal.PlainDate`                                       | -         | The first and last selectable days                             |
| `disabledDates`            | `DateMatcher`                                              | -         | Days that can neither be focused nor selected                  |
| `classNames`               | `CalendarClassNames`                                       | -         | Custom classes for calendar parts                              |

| Slot  | Props                  | Description                    |
| ----- | ---------------------- | ------------------------------ |
| `day` | `{ day, state, text }` | Custom content of a day button |

## Examples

### Two Months

<ComponentPreview name="range-calendar-2" />

### Future Dates Only

Use `min-date` to disable the days before today:

<ComponentPreview name="range-calendar-3" />

### Range Length

Use `min-days` and `max-days` to limit the length of a range:

<ComponentPreview name="range-calendar-4" />

### Disabled Days

Use `disabled-dates` to disable days, here the weekends:

<ComponentPreview name="range-calendar-5" />
