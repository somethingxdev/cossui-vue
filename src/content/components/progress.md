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

Root component. Styled wrapper for `Progress` from UI SDK. When no slot content is provided, automatically renders a track and indicator.

### ProgressTrack

Track container for the progress indicator. Styled wrapper for `ProgressTrack` from UI SDK.

### ProgressIndicator

Visual indicator showing the current progress. Styled wrapper for `ProgressIndicator` from UI SDK.

### ProgressLabel

Label text for the progress bar. Styled wrapper for `ProgressLabel` from UI SDK.

### ProgressValue

Displays the current value. Styled wrapper for `ProgressValue` from UI SDK. Use the default slot (`v-slot="{ formattedValue, value }"`) to customize the rendered text.

## Examples

### With Label and Value

<ComponentPreview name="progress-2" />

### With Formatted Value

<ComponentPreview name="progress-3" />
