---
preview: collapsible-1
---

## Usage

```ts
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
```

```vue
<Collapsible>
  <CollapsibleTrigger>Can I access the file in the cloud?</CollapsibleTrigger>
  <CollapsiblePanel>
    Yes, you can access the file in the cloud.
  </CollapsiblePanel>
</Collapsible>
```

## API Reference

### Collapsible

Root component. Alias for `Collapsible` from UI SDK. Supports `v-model:open` and `default-open`.

### CollapsibleTrigger

Trigger button that toggles the collapsible panel. Alias for `CollapsibleTrigger` from UI SDK. It has `data-open` while the panel is open.

### CollapsiblePanel

Collapsible content panel. Styled wrapper for `CollapsiblePanel` from UI SDK with animated height transitions. Also exported as `CollapsibleContent`.
