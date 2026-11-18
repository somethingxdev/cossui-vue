---
preview: popover-1
---

## Usage

```ts
import {
  Popover,
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover'
```

```vue
<Popover>
  <PopoverTrigger>Open Popover</PopoverTrigger>
  <PopoverPopup>
    <PopoverTitle>Popover Title</PopoverTitle>
    <PopoverDescription>Popover Description</PopoverDescription>
    <PopoverClose>Close</PopoverClose>
  </PopoverPopup>
</Popover>
```

## API Reference

### Popover

Root component. Alias for `Popover` from UI SDK. Supports `v-model:open`, `default-open` and `open-on-hover`. See the [UI SDK Popover docs](https://ui-sdk.dev/docs/components/popover) for every prop and event.

### PopoverTrigger

Trigger button that opens the popover. Wrapper for `PopoverTrigger` from UI SDK. Use the `as` prop to render it as another component (e.g. `:as="Button"`).

### PopoverPopup

Popup container that displays the popover content. Styled wrapper for `PopoverContent` from UI SDK, which renders in the browser's top layer and positions itself, so there is no portal or positioner. Also exported as `PopoverContent`. Its default slot receives `{ state }`; `state.payload` is the payload of the trigger that opened it.

| Prop            | Type                                                         | Default    | Description                                                                      |
| --------------- | ------------------------------------------------------------ | ---------- | -------------------------------------------------------------------------------- |
| `tooltip-style` | `boolean`                                                    | `false`    | When true, applies tooltip-like styling (smaller padding and text)               |
| `side`          | `"top" \| "bottom" \| "left" \| "right" \| "start" \| "end"` | `"bottom"` | Side of the trigger to position the popup                                        |
| `align`         | `"start" \| "center" \| "end"`                               | `"center"` | Alignment relative to the trigger                                                |
| `side-offset`   | `number`                                                     | `4`        | Distance from the trigger in pixels                                              |
| `align-offset`  | `number`                                                     | `0`        | Offset along the alignment axis                                                  |
| `anchor`        | `Element \| string \| { x, y } \| ...`                       | -          | Element, selector or point to position the popup against, instead of the trigger |

Other `PopoverContent` props from UI SDK, such as `collision-padding`, `keep-mounted` and `container`, are forwarded.

### PopoverTitle

Title text for the popover. Styled wrapper for `PopoverTitle` from UI SDK.

### PopoverDescription

Description text for the popover. Styled wrapper for `PopoverDescription` from UI SDK.

### PopoverClose

Close button for the popover. Wrapper for `PopoverClose` from UI SDK. Pass `as` to render it as another component, such as `Button`.

### createPopoverController

Creates a controller for detached popover triggers, from UI SDK. Pass it as `controller` to the `Popover` and to triggers elsewhere in the tree, or call `open()` and `close()` on it.

## Examples

### With Close Button

<ComponentPreview name="popover-2" />

### Tooltip Style

Use the `tooltip-style` prop to make a popover look like a tooltip. This is recommended when you have an info icon button whose only purpose is to show additional information. Set `open-on-hover` on the `Popover` to also open it on hover. See the [tooltip accessibility notes](https://ui-sdk.dev/docs/components/tooltip#accessibility) for best practices.

<ComponentPreview name="popover-4" />

### Detached Triggers

Multiple triggers can share a single popover popup. The popup moves to the trigger that opened it and shows that trigger's content.

To create detached triggers:

1. Create a controller using `createPopoverController`
2. Pass it as `controller` to multiple `PopoverTrigger` components
3. Each trigger provides a `payload` prop identifying the content to show
4. Use a single `Popover` component with the same `controller`, and read the payload from `@payload-change` or from the `state.payload` of the `PopoverPopup` default slot

<ComponentPreview name="popover-3" />
