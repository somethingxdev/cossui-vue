---
preview: toolbar-1
---

## Usage

```ts
import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
} from '@/components/ui/toolbar'
```

```vue
<Toolbar>
  <ToolbarGroup>
    <Toggle>Bold</Toggle>
    <Toggle>Underline</Toggle>
  </ToolbarGroup>
  <ToolbarSeparator />
  <ToolbarButton :as="Button">Save</ToolbarButton>
</Toolbar>
```

## API Reference

### Toolbar

Root component. Styled wrapper for `Toolbar` from [UI SDK](https://ui-sdk.dev/docs/components/toolbar) with flex layout. Arrow keys move between items; the toolbar is one tab stop.

### ToolbarGroup

Groups related toolbar items. Styled wrapper for `ToolbarGroup` from UI SDK.

### ToolbarButton

Button within the toolbar. Wrapper for `ToolbarButton` from UI SDK. Use the `as` prop to render it as another component, such as `Button` or `SelectTrigger`. `Toggle` and `ToggleGroup` join the toolbar on their own: put them straight inside it, not through `ToolbarButton`.

### ToolbarSeparator

Visual separator between toolbar items. Styled wrapper for `ToolbarSeparator` from UI SDK.

### ToolbarLink

Link within the toolbar. Wrapper for `ToolbarLink` from UI SDK.
