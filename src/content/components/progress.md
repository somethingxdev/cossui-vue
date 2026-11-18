---
preview: progress-1
---

## Usage

```ts
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from '@/components/ui/progress'
```

```vue
<Progress :value="40" />
```

Note: If you render slot content inside `Progress`, you must also include `ProgressTrack` and `ProgressIndicator` inside it. Without them, the bar will not display. When no slot content is provided, a default track and indicator are rendered for you.

## API Reference

### Progress

Root component. Styled wrapper for `Progress.Root` from Vase UI. When no slot content is provided, automatically renders a track and indicator.

### ProgressTrack

Track container for the progress indicator. Styled wrapper for `Progress.Track` from Vase UI.

### ProgressIndicator

Visual indicator showing the current progress. Styled wrapper for `Progress.Indicator` from Vase UI.

### ProgressLabel

Label text for the progress bar. Styled wrapper for `Progress.Label` from Vase UI.

### ProgressValue

Displays the current value. Styled wrapper for `Progress.Value` from Vase UI. Use the default slot (`v-slot="{ formattedValue, value }"`) to customize the rendered text.

## Examples

### With Label and Value

<ComponentPreview name="progress-2" />

### With Formatted Value

<ComponentPreview name="progress-3" />
