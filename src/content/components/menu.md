---
preview: menu-1
---

## Usage

```ts
import {
  Menu,
  MenuCheckboxItem,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuLinkItem,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
  MenuTrigger,
} from '@/components/ui/menu'
```

```vue
<Menu>
  <MenuTrigger>Open</MenuTrigger>
  <MenuPopup align="start" :side-offset="4">
    <MenuItem>Profile</MenuItem>
    <MenuSeparator />

    <MenuGroup>
      <MenuGroupLabel>Playback</MenuGroupLabel>
      <MenuItem>Play</MenuItem>
      <MenuItem>Pause</MenuItem>
    </MenuGroup>

    <MenuSeparator />

    <MenuCheckboxItem>Shuffle</MenuCheckboxItem>
    <MenuCheckboxItem>Repeat</MenuCheckboxItem>
    <MenuCheckboxItem variant="switch">Auto save</MenuCheckboxItem>

    <MenuSeparator />

    <MenuGroup>
      <MenuGroupLabel>Sort by</MenuGroupLabel>
      <MenuRadioGroup>
        <MenuRadioItem value="artist">Artist</MenuRadioItem>
        <MenuRadioItem value="album">Album</MenuRadioItem>
        <MenuRadioItem value="title">Title</MenuRadioItem>
      </MenuRadioGroup>
    </MenuGroup>

    <MenuSeparator />

    <MenuSub>
      <MenuSubTrigger>Add to playlist</MenuSubTrigger>
      <MenuSubPopup>
        <MenuItem>Jazz</MenuItem>
        <MenuItem>Rock</MenuItem>
      </MenuSubPopup>
    </MenuSub>
  </MenuPopup>
</Menu>
```

## API Reference

### Menu

Root component. Alias for `Menu` from UI SDK. Supports `v-model:open`. Also exported as `DropdownMenu`.

### createMenuController

Creates a controller for detached triggers, from UI SDK. Pass it as `controller` to the `Menu` and to triggers elsewhere in the tree, or call `open()` and `close()` on it. Also exported as `MenuCreateHandle` and `DropdownMenuCreateHandle`.

### MenuTrigger

Trigger button that opens the menu. Wrapper for `MenuTrigger` from UI SDK. Use the `as` prop to render it as another component (e.g. `:as="Button"`). Also exported as `DropdownMenuTrigger`.

### MenuPopup

Popup container that displays the menu content. Styled wrapper for `MenuContent` from UI SDK. Also exported as `DropdownMenuContent`.

| Prop          | Type                                                         | Default    | Description                                                  |
| ------------- | ------------------------------------------------------------ | ---------- | ------------------------------------------------------------ |
| `side`        | `"top" \| "bottom" \| "left" \| "right" \| "start" \| "end"` | `"bottom"` | Side of the trigger to position the popup                    |
| `align`       | `"start" \| "center" \| "end"`                               | `"center"` | Alignment relative to the trigger                            |
| `sideOffset`  | `number`                                                     | `4`        | Distance from the trigger in pixels                          |
| `alignOffset` | `number`                                                     | -          | Offset along the alignment axis                              |
| `anchor`      | `Element \| string \| { x, y } \| null`                      | -          | What to position the popup against (defaults to the trigger) |

Other `MenuContent` props from UI SDK, such as `collisionPadding`, `keepMounted` and `container`, pass through. There is no portal: the popup renders in the browser's top layer.

### MenuGroup

Groups related menu items. Alias for `MenuGroup` from UI SDK. Also exported as `DropdownMenuGroup`.

### MenuItem

Individual menu item. Styled wrapper for `MenuItem` from UI SDK: it closes the menu when chosen unless `:close-on-select="false"`, and `@select` runs when it is chosen. Also exported as `DropdownMenuItem`.

| Prop      | Type                         | Default     | Description                                           |
| --------- | ---------------------------- | ----------- | ----------------------------------------------------- |
| `inset`   | `boolean`                    | -           | Adds left padding to align with items that have icons |
| `variant` | `"default" \| "destructive"` | `"default"` | Controls the item styling                             |

**Using `inset`:** When mixing items with and without icons, use `inset` on icon-less items to maintain alignment:

```vue
<MenuItem>
<PencilIcon /> Edit
</MenuItem>

<MenuItem>
<TrashIcon /> Delete
</MenuItem>

<!-- Aligns with icon items above -->
<MenuItem inset>
Profile
</MenuItem>
```

### MenuLinkItem

Link menu item for navigation. A `MenuItem` rendered as a native **`<a>`**, or as the component you pass to **`as`**.

| Prop           | Type                         | Default     | Description                                                    |
| -------------- | ---------------------------- | ----------- | -------------------------------------------------------------- |
| `inset`        | `boolean`                    | -           | Adds left padding to align with items that have icons          |
| `variant`      | `"default" \| "destructive"` | `"default"` | Controls the item styling                                      |
| `closeOnClick` | `boolean`                    | `true`      | Whether the menu closes when the link is clicked               |
| `as`           | `string \| Component`        | `"a"`       | Render as a different element or component (e.g. `RouterLink`) |

When using a router link, pass it through the **`as`** prop. Do not replace it with **`href`** alone.

```vue
<MenuLinkItem :as="RouterLink" to="/docs">
Docs
</MenuLinkItem>
```

Use **`href`** only for plain anchor links:

```vue
<MenuLinkItem href="/docs">
Docs
</MenuLinkItem>
```

### MenuCheckboxItem

Checkbox menu item. Styled wrapper for `MenuCheckboxItem` from UI SDK. Supports `v-model:checked` and `default-checked`. `value` is optional here; pass one to tell items apart in the `@checked-change` of `Menu`. Also exported as `DropdownMenuCheckboxItem`.

| Prop      | Type                    | Default     | Description                                              |
| --------- | ----------------------- | ----------- | -------------------------------------------------------- |
| `variant` | `"default" \| "switch"` | `"default"` | Display style - `switch` shows a toggle switch indicator |

### MenuRadioGroup

Groups radio menu items. Alias for `MenuRadioGroup` from UI SDK. Supports `v-model:value`. Also exported as `DropdownMenuRadioGroup`.

### MenuRadioItem

Radio menu item. Styled wrapper for `MenuRadioItem` from UI SDK. Requires a `value`. Also exported as `DropdownMenuRadioItem`.

### MenuGroupLabel

Label for a menu group. Also exported as `DropdownMenuLabel`.

| Prop    | Type      | Default | Description                                           |
| ------- | --------- | ------- | ----------------------------------------------------- |
| `inset` | `boolean` | -       | Adds left padding to align with items that have icons |

### MenuSeparator

Visual separator between menu items. Styled wrapper for `MenuSeparator` from UI SDK. Also exported as `DropdownMenuSeparator`.

### MenuShortcut

Displays keyboard shortcut text. Custom component (not a UI SDK wrapper). Also exported as `DropdownMenuShortcut`.

### MenuSub

Submenu container. Alias for `MenuSub` from UI SDK. Also exported as `DropdownMenuSub`.

### MenuSubTrigger

Trigger for opening a submenu. Styled wrapper for `MenuSubTrigger` from UI SDK. Also exported as `DropdownMenuSubTrigger`.

| Prop    | Type      | Default | Description                                           |
| ------- | --------- | ------- | ----------------------------------------------------- |
| `inset` | `boolean` | -       | Adds left padding to align with items that have icons |

### MenuSubPopup

Popup for submenu content. Styled wrapper for `MenuSubContent` from UI SDK. Also exported as `DropdownMenuSubContent`.

| Prop          | Type                           | Default   | Description                                                                      |
| ------------- | ------------------------------ | --------- | -------------------------------------------------------------------------------- |
| `align`       | `"start" \| "center" \| "end"` | `"start"` | Alignment relative to the trigger                                                |
| `sideOffset`  | `number`                       | `0`       | Distance from the trigger in pixels                                              |
| `alignOffset` | `number`                       | `-5`      | Offset along the alignment axis. Defaults to `-5` when `align` is not `"center"` |

## Examples

### Open on Hover

UI SDK menus open on press. To open one on hover, control it with `v-model:open` and set it from pointer events on the trigger and the popup.

<ComponentPreview name="menu-2" />

### With Checkbox

<ComponentPreview name="menu-3" />

### With Switch

`MenuCheckboxItem` supports a `variant="switch"` prop that displays a decorative switch indicator instead of a checkmark. This is a purely visual variant - the component remains a checkbox item with the same functionality.

<ComponentPreview name="menu-9" />

### With Radio Group

<ComponentPreview name="menu-4" />

### With Link

<ComponentPreview name="menu-5" />

### With Group Label

<ComponentPreview name="menu-6" />

### Nested Menu

<ComponentPreview name="menu-7" />

### Close on Select

Items close the menu when chosen; checkbox and radio items keep it open. `close-on-select` changes either default.

<ComponentPreview name="menu-8" />

### Open a Dialog

<ComponentPreview name="dialog-2" />
