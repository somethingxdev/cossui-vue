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

Root component. Alias for `Popover.Root` from Vase UI. Supports `v-model:open` and `default-open`.

### PopoverTrigger

Trigger button that opens the popover. Alias for `Popover.Trigger` from Vase UI. Use the `as` prop to render it as another component (e.g. `:as="Button"`).

### PopoverPopup

Popup container that displays the popover content. Also exported as `PopoverContent`.

| Prop            | Type                                     | Default    | Description                                                                                               |
| --------------- | ---------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| `tooltip-style` | `boolean`                                | `false`    | When true, applies tooltip-like styling (smaller padding, arrow)                                          |
| `side`          | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"` | Side of the trigger to position the popup                                                                 |
| `align`         | `"start" \| "center" \| "end"`           | `"center"` | Alignment relative to the trigger                                                                         |
| `side-offset`   | `number`                                 | `4`        | Distance from the trigger in pixels                                                                       |
| `align-offset`  | `number`                                 | `0`        | Offset along the alignment axis                                                                           |
| `anchor`        | `Element \| VirtualElement \| ...`       | -          | Element to position the popup against, instead of the trigger                                             |
| `portal-props`  | `PopoverPortalProps`                     | -          | Props forwarded to the internal portal (`keepMounted`, `container`, etc.); see Vase UI Popover portal API |

### PopoverTitle

Title text for the popover. Styled wrapper for `Popover.Title` from Vase UI.

### PopoverDescription

Description text for the popover. Styled wrapper for `Popover.Description` from Vase UI.

### PopoverClose

Close button for the popover. Alias for `Popover.Close` from Vase UI.

### PopoverCreateHandle

Creates a handle for detached popover triggers. Returns a handle object to attach to multiple triggers.

## Examples

### With Close Button

<ComponentPreview name="popover-2" />

### Tooltip Style

Use the `tooltip-style` prop to make a popover look like a tooltip. This is recommended when you have an info icon button whose only purpose is to show additional information. See the [tooltip accessibility guidelines](https://base-ui.com/react/components/tooltip#accessibility-guidelines) for best practices.

<ComponentPreview name="popover-4" />

### Animated Popovers

You can create animated popovers that smoothly transition between different triggers using detached triggers. This pattern allows multiple triggers to share a single popover popup, with automatic animations for position, size, and content changes.

To create detached triggers:

1. Create a handle using `PopoverCreateHandle`
2. Attach the same handle to multiple `PopoverTrigger` components
3. Each trigger provides a `payload` prop identifying the content to show
4. Use a single `Popover` component with the handle and read `payload` from its default slot to render the popup

<ComponentPreview name="popover-3" />
