---
preview: menubar-1
---

## Usage

```ts
import { MenuItem, MenuSeparator } from '@/components/ui/menu'
import {
  Menubar,
  MenubarMenu,
  MenubarPopup,
  MenubarTrigger,
} from '@/components/ui/menubar'
```

```vue
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarPopup>
      <MenuItem>New</MenuItem>
      <MenuItem>Open</MenuItem>
      <MenuSeparator />
      <MenuItem>Print</MenuItem>
    </MenubarPopup>
  </MenubarMenu>
</Menubar>
```

The items inside a `MenubarPopup` are the parts of [Menu](/docs/components/menu): `MenuItem`, `MenuCheckboxItem`, `MenuRadioGroup`, `MenuSub`, `MenuSeparator`, `MenuShortcut` and the rest.

## API Reference

### Menubar

Root container for a row of menus. Styled wrapper for `Menubar` from Vase UI.

| Prop          | Type                         | Default        | Description                                                  |
| ------------- | ---------------------------- | -------------- | ------------------------------------------------------------ |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | The layout direction of the menubar                          |
| `disabled`    | `boolean`                    | `false`        | Whether the whole menubar is disabled                        |
| `loop-focus`  | `boolean`                    | `true`         | Whether keyboard focus wraps from the last menu to the first |
| `modal`       | `boolean`                    | `true`         | Whether the menubar is modal while a menu is open            |

### MenubarMenu

A single menu in the menubar. Alias for `Menu.Root` from Vase UI. Supports `v-model:open`, `default-open` and `disabled`.

### MenubarTrigger

Button that opens its menu. Styled wrapper for `Menu.Trigger` from Vase UI, styled as a ghost button that stays highlighted while its menu is open.

### MenubarPopup

Popup container for the menu items. Wraps `MenuPopup`, so it opens from the start of its trigger like a desktop menu. Also exported as `MenubarContent`.

| Prop           | Type                           | Default   | Description                         |
| -------------- | ------------------------------ | --------- | ----------------------------------- |
| `align`        | `"start" \| "center" \| "end"` | `"start"` | Alignment relative to the trigger   |
| `side-offset`  | `number`                       | `8`       | Distance from the trigger in pixels |
| `align-offset` | `number`                       | `-4`      | Offset along the alignment axis     |

Other `MenuPopup` props, such as `side`, pass through.

## Examples

### Submenus

<ComponentPreview name="menubar-2" />

### Checkbox and Radio Items

<ComponentPreview name="menubar-3" />

### Disabled

Disable a whole menu with `disabled` on `MenubarMenu`, or a single item with `disabled` on the item.

<ComponentPreview name="menubar-4" />

### Vertical Orientation

<ComponentPreview name="menubar-5" />
