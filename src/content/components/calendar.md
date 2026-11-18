---
preview: calendar-1
---

## Usage

```ts
import { Calendar } from '@/components/ui/calendar'
```

```vue
<Calendar />
```

## API Reference

This component wraps Vase UI's Calendar with custom styling. Dates are [Temporal](https://tc39.es/proposal-temporal/docs/) values.

### Calendar

A calendar component for date selection.

| Prop                      | Type                                                 | Default   | Description                                                       |
| ------------------------- | ---------------------------------------------------- | --------- | ----------------------------------------------------------------- |
| `value` / `v-model:value` | `Temporal.PlainDate \| Temporal.PlainDate[] \| null` | -         | The selected date(s)                                              |
| `defaultValue`            | `Temporal.PlainDate \| Temporal.PlainDate[] \| null` | -         | The selected date(s) when uncontrolled                            |
| `multiple`                | `boolean`                                            | `false`   | Allow selecting more than one date                                |
| `captionLayout`           | `"label" \| "dropdown"`                              | `"label"` | Caption layout - use `"dropdown"` for month/year dropdowns        |
| `showOutsideDays`         | `boolean`                                            | `true`    | Show days from adjacent months                                    |
| `showWeekNumber`          | `boolean`                                            | `false`   | Show the week number column                                       |
| `minDate`                 | `Temporal.PlainDate`                                 | -         | First selectable day, also the first month in dropdown navigation |
| `maxDate`                 | `Temporal.PlainDate`                                 | -         | Last selectable day, also the last month in dropdown navigation   |
| `month` / `v-model:month` | `Temporal.PlainYearMonth`                            | -         | The month the grid shows                                          |
| `numberOfMonths`          | `number`                                             | `1`       | Number of months shown side by side                               |
| `disabledDates`           | `DateMatcher`                                        | -         | Days that can neither be focused nor selected                     |
| `classNames`              | `CalendarClassNames`                                 | -         | Custom classes for calendar parts                                 |

| Slot  | Props                  | Description                    |
| ----- | ---------------------- | ------------------------------ |
| `day` | `{ day, state, text }` | Custom content of a day button |

For the full list of props, see the Vase UI Calendar documentation.

### Range selection

For selecting a range of dates, use `RangeCalendar` from `@/components/ui/range-calendar`. It has the same look and props, and its `v-model:value` is a `[start, end]` tuple.

### Customizing Cell Size

The calendar uses CSS custom properties for cell sizing. By default, the cell size is `--spacing(10)` on mobile and `--spacing(9)` on larger screens: `[--cell-size:--spacing(10)] sm:[--cell-size:--spacing(9)]`.

You can customize the cell size by passing a custom `class`:

```vue
<Calendar class="[--cell-size:--spacing(11)]" />
```

Or use responsive values:

```vue
<Calendar class="[--cell-size:--spacing(11)] sm:[--cell-size:--spacing(10)]" />
```

## Examples

### Single Date Selection

<ComponentPreview name="calendar-2" />

### Date Range Selection

<ComponentPreview name="calendar-3" />

### Dropdown Navigation

Use `caption-layout="dropdown"` with `min-date` and `max-date` to enable month/year dropdown navigation:

<ComponentPreview name="calendar-4" />
