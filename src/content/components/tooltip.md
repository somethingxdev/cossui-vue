---
preview: tooltip-1
---

## Usage

```ts
import {
  Tooltip,
  TooltipCreateHandle,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
```

```vue
<Tooltip>
  <TooltipTrigger :as="Button" variant="outline">
    Hover me
  </TooltipTrigger>
  <TooltipPopup>Helpful hint</TooltipPopup>
</Tooltip>
```

## API Reference

### Tooltip

Root component. Alias for `Tooltip.Root` from Vase UI. Supports `v-model:open` and `default-open`.

### TooltipTrigger

Trigger element that shows the tooltip on hover/focus. Alias for `Tooltip.Trigger` from Vase UI. Use the `as` prop to render it as another component.

### TooltipPopup

Popup container that displays the tooltip content. Also exported as `TooltipContent`.

| Prop           | Type                                     | Default    | Description                                                                                               |
| -------------- | ---------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| `side`         | `"top" \| "bottom" \| "left" \| "right"` | `"top"`    | Side of the trigger to position the tooltip                                                               |
| `align`        | `"start" \| "center" \| "end"`           | `"center"` | Alignment relative to the trigger                                                                         |
| `side-offset`  | `number`                                 | `4`        | Distance from the trigger in pixels                                                                       |
| `anchor`       | `Element \| VirtualElement \| ...`       | -          | Element to position the tooltip against, instead of the trigger                                           |
| `portal-props` | `TooltipPortalProps`                     | -          | Props forwarded to the internal portal (`keepMounted`, `container`, etc.); see Vase UI Tooltip portal API |

### TooltipProvider

Provider for grouping tooltips. Alias for `Tooltip.Provider` from Vase UI.

### TooltipCreateHandle

Creates a handle for detached tooltip triggers. Returns a handle object to attach to multiple triggers for animated transitions.

## Examples

### Grouped Tooltips

To group multiple tooltips so they appear instantly after the first one is opened, wrap them in `TooltipProvider`. The grouping logic ensures that once a tooltip becomes visible, the adjacent tooltips will be shown instantly.

<ComponentPreview name="tooltip-2" />

### Animated Tooltips

You can create animated tooltips that smoothly transition between different triggers using detached triggers. This pattern allows multiple triggers to share a single tooltip popup, with automatic animations for position, size, and content changes.

To create detached triggers:

1. Create a handle using `TooltipCreateHandle`
2. Attach the same handle to multiple `TooltipTrigger` components
3. Each trigger provides a `payload` prop identifying the content to show
4. Use a single `Tooltip` component with the handle and read `payload` from its default slot to render the popup

<ComponentPreview name="tooltip-3" />
