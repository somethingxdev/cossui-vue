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

Root component. Alias for `PreviewCard.Root` from Vase UI. Also exported as `HoverCard`. Supports `v-model:open` and `default-open`.

### PreviewCardTrigger

Trigger element that shows the preview card on hover. Alias for `PreviewCard.Trigger` from Vase UI. Also exported as `HoverCardTrigger`.

### PreviewCardPopup

Popup container that displays the preview content. Also exported as `HoverCardContent`.

| Prop           | Type                               | Default    | Description                                                                                                    |
| -------------- | ---------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| `align`        | `"start" \| "center" \| "end"`     | `"center"` | Alignment relative to the trigger                                                                              |
| `side-offset`  | `number`                           | `4`        | Distance from the trigger in pixels                                                                            |
| `anchor`       | `Element \| VirtualElement \| ...` | -          | Element to position the popup against, instead of the trigger                                                  |
| `portal-props` | `PreviewCardPortalProps`           | -          | Props forwarded to the internal portal (`keepMounted`, `container`, etc.); see Vase UI Preview Card portal API |
