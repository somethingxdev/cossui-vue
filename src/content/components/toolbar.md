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
    <ToolbarButton :as="Toggle">Bold</ToolbarButton>
    <ToolbarButton :as="Toggle">Underline</ToolbarButton>
  </ToolbarGroup>
  <ToolbarSeparator />
  <ToolbarButton :as="Button">Save</ToolbarButton>
</Toolbar>
```

## API Reference

### Toolbar

Root component. Styled wrapper for `Toolbar.Root` from Vase UI with flex layout.

### ToolbarGroup

Groups related toolbar items. Styled wrapper for `Toolbar.Group` from Vase UI.

### ToolbarButton

Button within the toolbar. Alias for `Toolbar.Button` from Vase UI. Use with the `as` prop to render as Toggle or Button.

### ToolbarSeparator

Visual separator between toolbar items. Styled wrapper for `Toolbar.Separator` from Vase UI.

### ToolbarLink

Link within the toolbar. Alias for `Toolbar.Link` from Vase UI.
