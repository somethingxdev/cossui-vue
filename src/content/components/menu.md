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

Root component. Alias for `Menu.Root` from Vase UI. Also exported as `DropdownMenu`.

### MenuTrigger

Trigger button that opens the menu. Styled wrapper for `Menu.Trigger` from Vase UI. Use the `as` prop to render it as another component (e.g. `:as="Button"`). Also exported as `DropdownMenuTrigger`.

### MenuPopup

Popup container that displays the menu content. Also exported as `DropdownMenuContent`.

| Prop          | Type                                                                       | Default    | Description                                                                                            |
| ------------- | -------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| `side`        | `"top" \| "bottom" \| "left" \| "right" \| "inline-start" \| "inline-end"` | `"bottom"` | Side of the trigger to position the popup                                                              |
| `align`       | `"start" \| "center" \| "end"`                                             | `"center"` | Alignment relative to the trigger                                                                      |
| `sideOffset`  | `number`                                                                   | `4`        | Distance from the trigger in pixels                                                                    |
| `alignOffset` | `number`                                                                   | -          | Offset along the alignment axis                                                                        |
| `anchor`      | `Element \| VirtualElement \| null`                                        | -          | Element to position the popup against (defaults to the trigger)                                        |
| `portalProps` | `MenuPortalProps`                                                          | -          | Props forwarded to the internal portal (`keepMounted`, `container`, etc.); see Vase UI Menu portal API |

### MenuGroup

Groups related menu items. Styled wrapper for `Menu.Group` from Vase UI. Also exported as `DropdownMenuGroup`.

### MenuItem

Individual menu item. Also exported as `DropdownMenuItem`.

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

Link menu item for navigation. **`LinkItem`** renders a native **`<a>`** when you pass **`href`**. Styled like **`MenuItem`**.

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

Checkbox menu item. Supports `v-model:checked`. Also exported as `DropdownMenuCheckboxItem`.

| Prop      | Type                    | Default     | Description                                              |
| --------- | ----------------------- | ----------- | -------------------------------------------------------- |
| `variant` | `"default" \| "switch"` | `"default"` | Display style - `switch` shows a toggle switch indicator |

### MenuRadioGroup

Groups radio menu items. Styled wrapper for `Menu.RadioGroup` from Vase UI. Supports `v-model:value`. Also exported as `DropdownMenuRadioGroup`.

### MenuRadioItem

Radio menu item. Styled wrapper for `Menu.RadioItem` from Vase UI. Requires a `value`. Also exported as `DropdownMenuRadioItem`.

### MenuGroupLabel

Label for a menu group. Also exported as `DropdownMenuLabel`.

| Prop    | Type      | Default | Description                                           |
| ------- | --------- | ------- | ----------------------------------------------------- |
| `inset` | `boolean` | -       | Adds left padding to align with items that have icons |

### MenuSeparator

Visual separator between menu items. Styled wrapper for `Menu.Separator` from Vase UI. Also exported as `DropdownMenuSeparator`.

### MenuShortcut

Displays keyboard shortcut text. Custom component (not a Vase UI wrapper). Also exported as `DropdownMenuShortcut`.

### MenuSub

Submenu container. Alias for `Menu.SubmenuRoot` from Vase UI. Also exported as `DropdownMenuSub`.

### MenuSubTrigger

Trigger for opening a submenu. Also exported as `DropdownMenuSubTrigger`.

| Prop    | Type      | Default | Description                                           |
| ------- | --------- | ------- | ----------------------------------------------------- |
| `inset` | `boolean` | -       | Adds left padding to align with items that have icons |

### MenuSubPopup

Popup for submenu content. Also exported as `DropdownMenuSubContent`.

| Prop          | Type                           | Default   | Description                                                                      |
| ------------- | ------------------------------ | --------- | -------------------------------------------------------------------------------- |
| `align`       | `"start" \| "center" \| "end"` | `"start"` | Alignment relative to the trigger                                                |
| `sideOffset`  | `number`                       | `0`       | Distance from the trigger in pixels                                              |
| `alignOffset` | `number`                       | `-5`      | Offset along the alignment axis. Defaults to `-5` when `align` is not `"center"` |

## Examples

### Open on Hover

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

### Close on Click

<ComponentPreview name="menu-8" />

### Open a Dialog

<ComponentPreview name="dialog-2" />
