---
preview: meter-1
---

## Usage

```ts
import { Meter, MeterLabel, MeterValue } from '@/components/ui/meter'
```

```vue
<Meter :value="40">
  <MeterLabel>Progress</MeterLabel>
  <MeterValue />
</Meter>
```

## API Reference

### Meter

Root component. Styled wrapper for `Meter.Root` from Vase UI with flex column layout. When no slot content is provided, automatically renders a track and indicator.

### MeterTrack

Track container for the meter indicator. Styled wrapper for `Meter.Track` from Vase UI.

### MeterIndicator

Visual indicator showing the current value. Styled wrapper for `Meter.Indicator` from Vase UI.

### MeterLabel

Label text for the meter. Styled wrapper for `Meter.Label` from Vase UI.

### MeterValue

Displays the current value. Styled wrapper for `Meter.Value` from Vase UI. Use the default slot (`v-slot="{ formattedValue, value }"`) to customize the rendered text.

## Examples

### Without Label and Value

<ComponentPreview name="meter-2" />

### With Formatted Value

<ComponentPreview name="meter-3" />

### With Range

<ComponentPreview name="meter-4" />
