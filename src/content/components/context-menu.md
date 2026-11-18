---
preview: context-menu-1
---

## Usage

```ts
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuGroup,
  ContextMenuGroupLabel,
  ContextMenuItem,
  ContextMenuLinkItem,
  ContextMenuPopup,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubPopup,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
```

```vue
<ContextMenu>
  <ContextMenuTrigger class="flex h-32 items-center justify-center rounded-lg border border-dashed">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuPopup>
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuItem>Forward</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuLinkItem :as="RouterLink" to="/docs">
      Documentation
    </ContextMenuLinkItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger>More tools</ContextMenuSubTrigger>
      <ContextMenuSubPopup>
        <ContextMenuItem>Inspect</ContextMenuItem>
        <ContextMenuItem>View source</ContextMenuItem>
      </ContextMenuSubPopup>
    </ContextMenuSub>
  </ContextMenuPopup>
</ContextMenu>
```

## API Reference

### ContextMenu

Root component. Alias for `ContextMenu.Root` from Vase UI.

### ContextMenuTrigger

An area that opens the menu on right click or long press. Renders a `<div>` element.

### ContextMenuPopup

Popup container that displays the menu content at the pointer.

| Prop          | Type                                                                       | Default    | Description                                                                                                    |
| ------------- | -------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| `side`        | `"top" \| "bottom" \| "left" \| "right" \| "inline-start" \| "inline-end"` | `"bottom"` | Side of the anchor to position the popup                                                                       |
| `align`       | `"start" \| "center" \| "end"`                                             | `"center"` | Alignment relative to the anchor                                                                               |
| `sideOffset`  | `number`                                                                   | `4`        | Distance from the anchor in pixels                                                                             |
| `alignOffset` | `number`                                                                   | -          | Offset along the alignment axis                                                                                |
| `portalProps` | `ContextMenuPortalProps`                                                   | -          | Props forwarded to the internal portal (`keepMounted`, `container`, etc.); see Vase UI Context Menu portal API |

### ContextMenuGroup

Groups related menu items. Styled wrapper for `ContextMenu.Group` from Vase UI.

### ContextMenuItem

Individual menu item.

| Prop      | Type                         | Default     | Description                                           |
| --------- | ---------------------------- | ----------- | ----------------------------------------------------- |
| `inset`   | `boolean`                    | -           | Adds left padding to align with items that have icons |
| `variant` | `"default" \| "destructive"` | `"default"` | Controls the item styling                             |

**Using `inset`:** When mixing items with and without icons, use `inset` on icon-less items to maintain alignment:

```vue
<ContextMenuItem>
<PencilIcon /> Edit
</ContextMenuItem>

<ContextMenuItem inset>
Properties
</ContextMenuItem>
```

### ContextMenuLinkItem

Link menu item for navigation. **`LinkItem`** renders a native **`<a>`** when you pass **`href`**. Styled like **`ContextMenuItem`**.

| Prop           | Type                         | Default     | Description                                                    |
| -------------- | ---------------------------- | ----------- | -------------------------------------------------------------- |
| `inset`        | `boolean`                    | -           | Adds left padding to align with items that have icons          |
| `variant`      | `"default" \| "destructive"` | `"default"` | Controls the item styling                                      |
| `closeOnClick` | `boolean`                    | `true`      | Whether the menu closes when the link is clicked               |
| `as`           | `string \| Component`        | `"a"`       | Render as a different element or component (e.g. `RouterLink`) |

When using a router link, pass it through the **`as`** prop. Do not replace it with **`href`** alone.

```vue
<ContextMenuLinkItem :as="RouterLink" to="/docs">
Docs
</ContextMenuLinkItem>
```

Use **`href`** only for plain anchor links:

```vue
<ContextMenuLinkItem href="/docs">
Docs
</ContextMenuLinkItem>
```

### ContextMenuCheckboxItem

Checkbox menu item. Supports `v-model:checked`.

| Prop      | Type                    | Default     | Description                                              |
| --------- | ----------------------- | ----------- | -------------------------------------------------------- |
| `variant` | `"default" \| "switch"` | `"default"` | Display style - `switch` shows a toggle switch indicator |

### ContextMenuRadioGroup

Groups radio menu items. Styled wrapper for `ContextMenu.RadioGroup` from Vase UI. Supports `v-model:value`.

### ContextMenuRadioItem

Radio menu item. Styled wrapper for `ContextMenu.RadioItem` from Vase UI. Requires a `value`.

### ContextMenuGroupLabel

Label for a menu group.

| Prop    | Type      | Default | Description                                           |
| ------- | --------- | ------- | ----------------------------------------------------- |
| `inset` | `boolean` | -       | Adds left padding to align with items that have icons |

### ContextMenuSeparator

Visual separator between menu items.

### ContextMenuShortcut

Displays keyboard shortcut text. Custom component (not a Vase UI wrapper).

### ContextMenuSub

Submenu container. Alias for `ContextMenu.SubmenuRoot` from Vase UI.

### ContextMenuSubTrigger

Trigger for opening a submenu.

| Prop    | Type      | Default | Description                                           |
| ------- | --------- | ------- | ----------------------------------------------------- |
| `inset` | `boolean` | -       | Adds left padding to align with items that have icons |

### ContextMenuSubPopup

Popup for submenu content.

| Prop          | Type                           | Default   | Description                                                                      |
| ------------- | ------------------------------ | --------- | -------------------------------------------------------------------------------- |
| `align`       | `"start" \| "center" \| "end"` | `"start"` | Alignment relative to the trigger                                                |
| `sideOffset`  | `number`                       | `0`       | Distance from the trigger in pixels                                              |
| `alignOffset` | `number`                       | `-5`      | Offset along the alignment axis. Defaults to `-5` when `align` is not `"center"` |

## Examples

### With Link

<ComponentPreview name="context-menu-2" />

### Nested Menu

<ComponentPreview name="context-menu-3" />

### With Checkbox

<ComponentPreview name="context-menu-4" />

### With Group Label

<ComponentPreview name="context-menu-5" />

### With Icons

<ComponentPreview name="context-menu-6" />

### With Radio Group

<ComponentPreview name="context-menu-7" />

### With Switch

`ContextMenuCheckboxItem` supports a `variant="switch"` prop that displays a decorative switch indicator instead of a checkmark. This is a purely visual variant. The component remains a checkbox item with the same functionality.

<ComponentPreview name="context-menu-8" />
