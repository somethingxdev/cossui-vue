---
preview: time-clock-1
---

## Usage

```ts
import { TimeClock } from '@/components/ui/time-clock'
```

```vue
<TimeClock aria-label="Time" />
```

## API Reference

This component wraps Vase UI's TimeClock with custom styling. The header shows the hours and the minutes, and the face selects the unit of the active view. Times are [Temporal](https://tc39.es/proposal-temporal/docs/) values.

### TimeClock

| Prop                        | Type                                                                             | Default    | Description                                                                         |
| --------------------------- | -------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------- |
| `value` / `v-model:value`   | `Temporal.PlainTime \| Temporal.PlainDateTime \| Temporal.ZonedDateTime \| null` | -          | The time of the clock                                                               |
| `defaultValue`              | same as `value`                                                                  | -          | The time when uncontrolled                                                          |
| `view` / `v-model:view`     | `"hour" \| "minute" \| "second"`                                                 | -          | The unit the face shows                                                             |
| `granularity`               | `"hour" \| "minute" \| "second"`                                                 | `"minute"` | The smallest unit the user selects. `"second"` adds a seconds trigger to the header |
| `hourCycle`                 | `12 \| 24`                                                                       | locale     | A 12-hour face has a day period, a 24-hour face has an inner ring for 13 to 0       |
| `minuteStep` / `secondStep` | `number`                                                                         | `1`        | The step of the minutes and the seconds                                             |
| `minTime` / `maxTime`       | `Temporal.PlainTime`                                                             | -          | The earliest and latest selectable times                                            |
| `disabledTimes`             | `(time, view) => boolean`                                                        | -          | Returns `true` for a time the user cannot select                                    |
| `disabled`                  | `boolean`                                                                        | `false`    | Ignore user interaction                                                             |
| `readOnly`                  | `boolean`                                                                        | `false`    | Show the time without letting the user change it                                    |

## Examples

### 24-hour Cycle

<ComponentPreview name="time-clock-2" />

### With Seconds

<ComponentPreview name="time-clock-3" />

### Minute Step

<ComponentPreview name="time-clock-4" />

### Min and Max Times

<ComponentPreview name="time-clock-5" />

### Read-only

<ComponentPreview name="time-clock-6" />
