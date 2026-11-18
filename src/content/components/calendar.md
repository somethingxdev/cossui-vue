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

This component wraps UI SDK's [Calendar](https://ui-sdk.dev/docs/components/calendar) with custom styling. Dates are ISO strings like `"2026-10-16"`, and months are strings like `"2026-10"`. The helpers of `@ui-sdk/vue/date` (`todayDate`, `addDays`, `formatDate`) do the arithmetic and the formatting.

### Calendar

A calendar component for date selection.

| Prop                      | Type                                | Default    | Description                                                                              |
| ------------------------- | ----------------------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| `value` / `v-model:value` | `string \| string[] \| null`        | -          | The selected date, or the selected dates with `mode="multiple"`                          |
| `defaultValue`            | `string \| string[] \| null`        | -          | The selected date(s) when uncontrolled                                                   |
| `mode`                    | `"single" \| "multiple" \| "range"` | `"single"` | How many dates the calendar selects                                                      |
| `captionLayout`           | `"label" \| "dropdown"`             | `"label"`  | Caption layout - use `"dropdown"` for month/year dropdowns                               |
| `showOutsideDays`         | `boolean`                           | `true`     | Show days from adjacent months                                                           |
| `showWeekNumber`          | `boolean`                           | `false`    | Show the week number column                                                              |
| `min`                     | `string`                            | -          | First selectable day, also the first year in dropdown navigation                         |
| `max`                     | `string`                            | -          | Last selectable day, also the last year in dropdown navigation                           |
| `month` / `v-model:month` | `string`                            | -          | The first month the calendar shows, like `"2026-10"`                                     |
| `months`                  | `number`                            | `1`        | Number of months shown side by side                                                      |
| `pageBy`                  | `"month" \| "page"`                 | `"month"`  | Whether the navigation buttons move by one month or by `months` months                   |
| `unavailable`             | `DateMatchers`                      | -          | Days that cannot be selected: dates, `{ from, to }`, `{ weekday: [0, 6] }` or a function |
| `classNames`              | `CalendarClassNames`                | -          | Custom classes for calendar parts                                                        |

| Slot  | Props                  | Description                                               |
| ----- | ---------------------- | --------------------------------------------------------- |
| `day` | `{ day, state, text }` | Custom content of a day. `day` is the ISO date of the day |

For the full list of props, see the [UI SDK Calendar documentation](https://ui-sdk.dev/docs/components/calendar).

### Range selection

For selecting a range of dates, pass `mode="range"`. Its `v-model:value` is then a `[start, end]` tuple of ISO dates, or `null`.

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

Use `caption-layout="dropdown"` with `min` and `max` to enable month/year dropdown navigation:

<ComponentPreview name="calendar-4" />
