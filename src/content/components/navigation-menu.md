---
preview: navigation-menu-1
---

## Usage

```ts
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
```

```vue
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/quick-start">Quick Start</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/about">About</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuPopup />
</NavigationMenu>
```

`NavigationMenuContent` of each item renders inside the single `NavigationMenuPopup`, which animates its size and position as you move between triggers.

## API Reference

### NavigationMenu

Root component. Alias for `NavigationMenu.Root` from Vase UI.

| Prop            | Type                         | Default        | Description                                      |
| --------------- | ---------------------------- | -------------- | ------------------------------------------------ |
| `v-model:value` | `any`                        | -              | The value of the open item (controlled)          |
| `default-value` | `any`                        | `null`         | The value of the item that is open initially     |
| `orientation`   | `"horizontal" \| "vertical"` | `"horizontal"` | The layout direction of the menu                 |
| `delay`         | `number`                     | `50`           | Milliseconds to wait before opening on hover     |
| `close-delay`   | `number`                     | `50`           | Milliseconds to wait before closing on hover out |

### NavigationMenuList

Container for the items. Styled wrapper for `NavigationMenu.List` from Vase UI.

### NavigationMenuItem

A single item. Alias for `NavigationMenu.Item` from Vase UI. Takes an optional `value`.

### NavigationMenuTrigger

Button that opens the item's content. Styled wrapper for `NavigationMenu.Trigger` from Vase UI, styled as a ghost button with a chevron that rotates when open.

### NavigationMenuContent

The content of an item, shown in the popup. Styled wrapper for `NavigationMenu.Content` from Vase UI with directional enter and exit transitions.

### NavigationMenuLink

A navigation link. Styled wrapper for `NavigationMenu.Link` from Vase UI. Use the `as` prop to render a router link (e.g. `:as="RouterLink"`).

### NavigationMenuPopup

The popup that shows the active content. Renders the portal, positioner, popup and viewport.

| Prop           | Type                                     | Default    | Description                               |
| -------------- | ---------------------------------------- | ---------- | ----------------------------------------- |
| `side`         | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"` | Side of the trigger to position the popup |
| `align`        | `"start" \| "center" \| "end"`           | `"center"` | Alignment relative to the trigger         |
| `side-offset`  | `number`                                 | `8`        | Distance from the trigger in pixels       |
| `align-offset` | `number`                                 | `0`        | Offset along the alignment axis           |
| `portal-props` | `NavigationMenuPortalProps`              | -          | Props forwarded to the internal portal    |

## Examples

### Router Links

<ComponentPreview name="navigation-menu-2" />

### Vertical Orientation

<ComponentPreview name="navigation-menu-3" />
