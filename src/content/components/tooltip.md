---
preview: tooltip-1
---

## Usage

```ts
import {
  createTooltipController,
  Tooltip,
  TooltipPopup,
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

Root component. Alias for `Tooltip` from UI SDK. Supports `v-model:open`, `default-open`, `delay` and `close-delay`. See the [UI SDK Tooltip docs](https://ui-sdk.dev/docs/components/tooltip) for every prop and event.

### TooltipTrigger

Trigger element that shows the tooltip on hover/focus. Wrapper for `TooltipTrigger` from UI SDK. Use the `as` prop to render it as another component.

### TooltipPopup

Popup container that displays the tooltip content. Styled wrapper for `TooltipContent` from UI SDK, which renders in the browser's top layer and positions itself, so there is no portal or positioner. Also exported as `TooltipContent`. Its default slot receives `{ state }`; `state.payload` is the payload of the trigger that opened it.

| Prop          | Type                                                         | Default    | Description                                                                        |
| ------------- | ------------------------------------------------------------ | ---------- | ---------------------------------------------------------------------------------- |
| `side`        | `"top" \| "bottom" \| "left" \| "right" \| "start" \| "end"` | `"top"`    | Side of the trigger to position the tooltip                                        |
| `align`       | `"start" \| "center" \| "end"`                               | `"center"` | Alignment relative to the trigger                                                  |
| `side-offset` | `number`                                                     | `4`        | Distance from the trigger in pixels                                                |
| `anchor`      | `Element \| string \| { x, y } \| ...`                       | -          | Element, selector or point to position the tooltip against, instead of the trigger |

Other `TooltipContent` props from UI SDK, such as `align-offset`, `collision-padding` and `container`, are forwarded.

### createTooltipController

Creates a controller for detached tooltip triggers, from UI SDK. Pass it as `controller` to the `Tooltip` and to triggers elsewhere in the tree.

## Examples

### Grouped Tooltips

Tooltips group on their own, without a provider. Once a tooltip is open, or was a moment ago, the adjacent tooltips are shown instantly.

<ComponentPreview name="tooltip-2" />

### Detached Triggers

Multiple triggers can share a single tooltip popup. The popup moves to the trigger that opened it and shows that trigger's content.

To create detached triggers:

1. Create a controller using `createTooltipController`
2. Pass it as `controller` to multiple `TooltipTrigger` components
3. Each trigger provides a `payload` prop identifying the content to show
4. Use a single `Tooltip` component with the same `controller`, and read `state.payload` from the default slot of `TooltipPopup`

<ComponentPreview name="tooltip-3" />
