---
preview: date-field-1
---

## Usage

```ts
import { DateField } from '@/components/ui/date-field'
```

```vue
<DateField aria-label="Date" />
```

## API Reference

This component wraps Vase UI's DateField with the look of [Input](/docs/components/input). Each part of the date is a segment that the user types into or changes with the arrow keys. Dates are [Temporal](https://tc39.es/proposal-temporal/docs/) values.

### DateField

| Prop                      | Type                                                                                                        | Default        | Description                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------- |
| `value` / `v-model:value` | `Temporal.PlainDate \| Temporal.PlainDateTime \| Temporal.ZonedDateTime \| Temporal.PlainYearMonth \| null` | -              | The value of the field. The field gives back a value of the same kind                   |
| `defaultValue`            | same as `value`                                                                                             | -              | The value when uncontrolled                                                             |
| `granularity`             | `"month" \| "day" \| "hour" \| "minute" \| "second"`                                                        | `"day"`        | The last unit the field shows. With no value, it also gives the kind of the new value   |
| `size`                    | `"sm" \| "default" \| "lg"`                                                                                 | `"default"`    | The height of the field                                                                 |
| `minDate` / `maxDate`     | `Temporal.PlainDate`                                                                                        | -              | The earliest and latest dates the field accepts. A date outside makes the field invalid |
| `unavailableDates`        | `DateMatcher`                                                                                               | -              | Dates the field refuses                                                                 |
| `hourCycle`               | `12 \| 24`                                                                                                  | locale         | The hour cycle of the time segments                                                     |
| `locale`                  | `Intl.LocalesArgument`                                                                                      | runtime locale | The order, names and digits of the segments                                             |
| `disabled`                | `boolean`                                                                                                   | `false`        | Ignore user interaction                                                                 |
| `readOnly`                | `boolean`                                                                                                   | `false`        | Prevent changing the value                                                              |
| `required`                | `boolean`                                                                                                   | `false`        | Require a value before submitting a form                                                |
| `name`                    | `string`                                                                                                    | -              | Name of the hidden input for forms                                                      |
| `id`                      | `string`                                                                                                    | -              | The id of the first segment, so that a `Label` can point to it                          |

## Examples

### Controlled

<ComponentPreview name="date-field-2" />

### Sizes

<ComponentPreview name="date-field-3" />

### Date and Time

A `Temporal.PlainDateTime` value shows the time segments too:

<ComponentPreview name="date-field-4" />

### Month and Year

Use `granularity="month"` to enter a year and a month:

<ComponentPreview name="date-field-5" />

### Min and Max Dates

<ComponentPreview name="date-field-6" />

### Disabled

<ComponentPreview name="date-field-7" />
