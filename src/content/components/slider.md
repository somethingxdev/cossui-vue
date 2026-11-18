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

Root component. Styled wrapper for `Slider.Root` from Vase UI with default min/max values and edge-aligned thumbs. Renders one thumb per value. Supports `v-model:value`; other Vase UI root props (`orientation`, `disabled`, `name`, `step`, …) and events (`@value-change`, `@value-committed`) are forwarded.

| Prop           | Type                          | Default | Description                                 |
| -------------- | ----------------------------- | ------- | ------------------------------------------- |
| `min`          | `number`                      | `0`     | Minimum value of the slider                 |
| `max`          | `number`                      | `100`   | Maximum value of the slider                 |
| `value`        | `number \| readonly number[]` | -       | Controlled value (use with `v-model:value`) |
| `defaultValue` | `number \| readonly number[]` | -       | Uncontrolled initial value                  |
| `getAriaLabel` | `(index: number) => string`   | -       | Accessible name for each generated thumb    |

| Slot      | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| `default` | Content rendered above the control, e.g. a label and `SliderValue` |

Note: The component sets `thumb-alignment="edge"` by default, which aligns thumbs to the edge of the track rather than centering them.

### SliderValue

Displays the current value. Styled wrapper for `Slider.Value` from Vase UI.

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
