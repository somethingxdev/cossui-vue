---
preview: kbd-1
---

## Usage

```ts
import { Kbd, KbdGroup } from '@/components/ui/kbd'
```

Single key:

```vue
<Kbd>
K
</Kbd>
```

Multiple keys (key combination):

```vue
<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>
```

## API Reference

This is a custom component built with plain elements, not a wrapper of a UI SDK part.

### Kbd

Displays a single keyboard key.

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `class` | `string` |         |

### KbdGroup

Groups multiple keyboard keys for key combinations.

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `class` | `string` |         |
