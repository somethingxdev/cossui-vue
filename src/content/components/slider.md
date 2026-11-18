---
preview: slider-1
---

## Usage

```ts
import { Slider, SliderValue } from '@/components/ui/slider'
```

```vue
<Slider :get-aria-label="() => 'Volume'" />
```

## API Reference

### Slider

Root component. Styled wrapper for `Slider`, `SliderControl`, `SliderTrack`, `SliderIndicator` and `SliderThumb` from [UI SDK](https://ui-sdk.dev/docs/components/slider) with default min/max values and edge-aligned thumbs. Renders one thumb per value. Supports `v-model:value`; other UI SDK root props (`orientation`, `disabled`, `name`, `step`, …) and events (`@value-change`, `@value-commit`) are forwarded. With a `name`, a range submits as one `"start/end"` value.

| Prop           | Type                        | Default | Description                                 |
| -------------- | --------------------------- | ------- | ------------------------------------------- |
| `min`          | `number`                    | `0`     | Minimum value of the slider                 |
| `max`          | `number`                    | `100`   | Maximum value of the slider                 |
| `value`        | `number \| number[]`        | -       | Controlled value (use with `v-model:value`) |
| `defaultValue` | `number \| number[]`        | -       | Uncontrolled initial value                  |
| `getAriaLabel` | `(index: number) => string` | -       | Accessible name for each generated thumb    |

| Slot      | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| `default` | Content rendered above the control, e.g. a label and `SliderValue` |

Note: Thumbs are aligned to the edges of the track rather than centered on its ends.

### SliderValue

Displays the formatted value, a range joined with an en dash. Styled wrapper for `SliderValue` from UI SDK. Its default slot receives `{ state }`, with `state.value` and `state.text`.

## Examples

For accessible labelling and validation, prefer using the `Field` component with an associated `FieldLabel`. See the related example: [Slider field](/docs/components/field#slider-field).

Use `getAriaLabel` when there is no associated label. Name each range endpoint separately:

```vue
<Slider
  :default-value="[20, 80]"
  :get-aria-label="(index: number) => index === 0 ? 'Minimum price' : 'Maximum price'"
/>
```

An associated `FieldLabel` continues to work without this prop. Setting `aria-label` on the root alone does not name its thumbs.

### With Label and Value

<ComponentPreview name="slider-2" />

### Range Slider

<ComponentPreview name="slider-7" />

### Vertical

<ComponentPreview name="slider-17" />

### Form Integration

<ComponentPreview name="slider-23" />
