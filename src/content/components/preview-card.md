---
preview: preview-card-1
---

## Usage

```ts
import { Button } from '@/components/ui/button'
import {
  PreviewCard,
  PreviewCardPopup,
  PreviewCardTrigger,
} from '@/components/ui/preview-card'
```

```vue
<PreviewCard>
  <PreviewCardTrigger>Open Preview Card</PreviewCardTrigger>
  <PreviewCardPopup>Preview Card Content</PreviewCardPopup>
</PreviewCard>
```

## API Reference

### PreviewCard

Root component. Alias for `HoverCard` from UI SDK. Also exported as `HoverCard`. Supports `v-model:open`, `default-open`, `delay` and `close-delay`. See the [UI SDK Hover Card docs](https://ui-sdk.dev/docs/components/hover-card) for every prop and event.

### PreviewCardTrigger

Trigger element that shows the preview card on hover. Wrapper for `HoverCardTrigger` from UI SDK, which renders a link. Pass `as` to render it as another component. Also exported as `HoverCardTrigger`.

### PreviewCardPopup

Popup container that displays the preview content. Styled wrapper for `HoverCardContent` from UI SDK, which renders in the browser's top layer and positions itself, so there is no portal or positioner. Also exported as `HoverCardContent`.

| Prop          | Type                                   | Default    | Description                                                                      |
| ------------- | -------------------------------------- | ---------- | -------------------------------------------------------------------------------- |
| `align`       | `"start" \| "center" \| "end"`         | `"center"` | Alignment relative to the trigger                                                |
| `side-offset` | `number`                               | `4`        | Distance from the trigger in pixels                                              |
| `anchor`      | `Element \| string \| { x, y } \| ...` | -          | Element, selector or point to position the popup against, instead of the trigger |

Other `HoverCardContent` props from UI SDK, such as `side`, `collision-padding`, `keep-mounted` and `container`, are forwarded.
