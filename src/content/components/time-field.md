---
preview: time-field-1
---

## Usage

```ts
import { TimeField } from '@/components/ui/time-field'
```

```vue
<TimeField aria-label="Time" />
```

## API Reference

This component wraps Vase UI's TimeField with the look of [Input](/docs/components/input). Each part of the time is a segment that the user types into or changes with the arrow keys. Times are [Temporal](https://tc39.es/proposal-temporal/docs/) values.

### TimeField

| Prop                      | Type                                                                             | Default        | Description                                                           |
| ------------------------- | -------------------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------- |
| `value` / `v-model:value` | `Temporal.PlainTime \| Temporal.PlainDateTime \| Temporal.ZonedDateTime \| null` | -              | The value of the field. The field gives back a value of the same kind |
| `defaultValue`            | same as `value`                                                                  | -              | The value when uncontrolled                                           |
| `granularity`             | `"hour" \| "minute" \| "second"`                                                 | `"minute"`     | The smallest unit the field shows                                     |
| `hourCycle`               | `12 \| 24`                                                                       | locale         | `12` shows a day period, `24` shows none                              |
| `size`                    | `"sm" \| "default" \| "lg"`                                                      | `"default"`    | The height of the field                                               |
| `minTime` / `maxTime`     | `Temporal.PlainTime`                                                             | -              | The earliest and latest times the field accepts                       |
| `locale`                  | `Intl.LocalesArgument`                                                           | runtime locale | The order of the segments and the default hour cycle                  |
| `disabled`                | `boolean`                                                                        | `false`        | Ignore user interaction                                               |
| `readOnly`                | `boolean`                                                                        | `false`        | Prevent changing the value                                            |
| `required`                | `boolean`                                                                        | `false`        | Require a value before submitting a form                              |
| `name`                    | `string`                                                                         | -              | Name of the hidden input for forms                                    |
| `id`                      | `string`                                                                         | -              | The id of the first segment, so that a `Label` can point to it        |

## Examples

### Controlled

<ComponentPreview name="time-field-2" />

### Hour Cycle

<ComponentPreview name="time-field-3" />

### With Seconds

<ComponentPreview name="time-field-4" />

### Sizes

<ComponentPreview name="time-field-5" />

### Disabled

<ComponentPreview name="time-field-6" />
