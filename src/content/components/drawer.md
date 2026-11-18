---
preview: drawer-1
---

## Usage

```ts
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerCreateHandle,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerMenu,
  DrawerMenuCheckboxItem,
  DrawerMenuGroup,
  DrawerMenuGroupLabel,
  DrawerMenuItem,
  DrawerMenuRadioGroup,
  DrawerMenuRadioItem,
  DrawerMenuSeparator,
  DrawerMenuTrigger,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
```

```vue
<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerPopup>
    <DrawerHeader>
      <DrawerTitle>Drawer Title</DrawerTitle>
      <DrawerDescription>Drawer Description</DrawerDescription>
    </DrawerHeader>
    <DrawerPanel>Content</DrawerPanel>
    <DrawerFooter>
      <DrawerClose>Close</DrawerClose>
    </DrawerFooter>
  </DrawerPopup>
</Drawer>
```

## API Reference

### Drawer

Root component. Wraps `Drawer.Root` from Vase UI with automatic `swipeDirection` mapping based on `position`.

| Prop             | Type                                     | Default    | Description                                                                                                                        |
| ---------------- | ---------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `position`       | `"right" \| "left" \| "top" \| "bottom"` | `"bottom"` | Controls which edge the drawer opens from. Sets the swipe direction automatically and flows to child components via provide/inject |
| `swipeDirection` | `"up" \| "down" \| "left" \| "right"`    | derived    | Overrides the swipe direction derived from `position`. Use when you need different swipe behavior                                  |

All other props from `Drawer.Root` are supported, including `v-model:open`, `modal`, `snapPoints`, `v-model:snap-point`, and `snapToSequentialPoints`. Note: Snap points only work for bottom drawers.

### DrawerCreateHandle

Creates a handle for detached drawer triggers. Use it when triggers and drawer content need to be coordinated across different parts of the tree.

### DrawerTrigger

Trigger button that opens the drawer. Styled wrapper for `Drawer.Trigger` from Vase UI.

### DrawerPopup

Popup container that displays the drawer content.

| Prop              | Type                                     | Default     | Description                                                                                                              |
| ----------------- | ---------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| `variant`         | `"default" \| "straight" \| "inset"`     | `"default"` | Controls the drawer style. `straight` removes rounded corners, `inset` adds spacing around the drawer on desktop screens |
| `showCloseButton` | `boolean`                                | `false`     | When true, displays a close button in the top-right corner                                                               |
| `showBar`         | `boolean`                                | `false`     | When true, displays a drag bar indicator                                                                                 |
| `position`        | `"right" \| "left" \| "top" \| "bottom"` | inherited   | Overrides the position provided by the parent `Drawer`                                                                   |
| `portalProps`     | `DrawerPortalProps`                      | -           | Props forwarded to the internal portal (`keepMounted`, `container`, etc.); see Vase UI Drawer portal API                 |

**Example:**

```vue
<!-- Bottom drawer (default) -->
<Drawer>
  <DrawerPopup>...</DrawerPopup>
</Drawer>

<!-- Right side drawer -->
<Drawer position="right">
  <DrawerPopup>...</DrawerPopup>
</Drawer>

<!-- Left side drawer -->
<Drawer position="left">
  <DrawerPopup>...</DrawerPopup>
</Drawer>

<!-- Drawer with inset variant -->
<Drawer position="right">
  <DrawerPopup variant="inset">...</DrawerPopup>
</Drawer>
```

### DrawerHeader

Container for the drawer title and description.

| Prop             | Type      | Default | Description                                                                                             |
| ---------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------- |
| `allowSelection` | `boolean` | `false` | When true, wraps the header in `DrawerContent` to reduce swipe interference during mouse text selection |

### DrawerFooter

Footer section for action buttons.

| Prop             | Type                  | Default     | Description                                                                                             |
| ---------------- | --------------------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `variant`        | `"default" \| "bare"` | `"default"` | Controls the footer styling. `default` includes border and background, `bare` removes them              |
| `allowSelection` | `boolean`             | `true`      | When true, wraps the footer in `DrawerContent` to reduce swipe interference during mouse text selection |

### DrawerTitle

Title component. Styled wrapper for `Drawer.Title` from Vase UI.

### DrawerDescription

Description component. Styled wrapper for `Drawer.Description` from Vase UI.

### DrawerPanel

Content container. When `scrollable` is true (default), wraps content in a `ScrollArea` component.

| Prop             | Type      | Default | Description                                                                                            |
| ---------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `scrollable`     | `boolean` | `true`  | When true, wraps content in a `ScrollArea`. Set to false for non-scrollable content                    |
| `scrollFade`     | `boolean` | `true`  | When true, shows a fade effect at scroll edges (only applies when `scrollable` is true)                |
| `allowSelection` | `boolean` | `true`  | When true, wraps the panel in `DrawerContent` to reduce swipe interference during mouse text selection |

### DrawerMenu

Container for drawer menu items. Use with `DrawerMenuItem`, `DrawerMenuSeparator`, `DrawerMenuGroup`, `DrawerMenuGroupLabel`, `DrawerMenuCheckboxItem`, `DrawerMenuRadioGroup`, `DrawerMenuRadioItem`, and `DrawerMenuTrigger` to build menus that mirror the Menu component API.

### DrawerMenuItem

Styled menu item that matches `MenuItem` appearance. Does not close the drawer. Render it through `DrawerClose` when close-on-click is needed.

| Prop       | Type                         | Default     | Description                                     |
| ---------- | ---------------------------- | ----------- | ----------------------------------------------- |
| `variant`  | `"default" \| "destructive"` | `"default"` | When `destructive`, uses destructive text color |
| `disabled` | `boolean`                    | -           | When true, disables the item                    |

**Example:** Use with `DrawerClose` for close-on-click: `<DrawerClose :as="DrawerMenuItem">Edit</DrawerClose>`

### DrawerMenuSeparator

Horizontal separator between menu items or groups.

### DrawerMenuGroup

Container for grouping related menu items. Use with `DrawerMenuGroupLabel` for labeled sections.

### DrawerMenuGroupLabel

Label for a `DrawerMenuGroup` section. Renders muted, smaller text above a group of items. In nested drawers, use as a section title at the top of the menu (no back button needed, swipe to go back).

### DrawerMenuTrigger

Trigger that opens a nested drawer. Styled like a menu item with a trailing chevron. Use for menu items that open nested drawers (e.g. "Add to Playlist" → nested drawer with playlist options). Wraps `Drawer.Trigger` internally.

**Example:** `<DrawerMenuTrigger>Add to Playlist</DrawerMenuTrigger>` opens a nested drawer when tapped.

### DrawerMenuCheckboxItem

Checkbox menu item for independent toggles. Supports `variant="switch"` for toggle-style switches. For selection groups, use `DrawerMenuRadioGroup` with `DrawerMenuRadioItem`.

### DrawerMenuRadioGroup

Container for radio menu items. Use with `DrawerMenuRadioItem` for mutually exclusive options (e.g. "Sort by" with Artist, Album, Title).

### DrawerMenuRadioItem

Radio menu item. Must be used inside `DrawerMenuRadioGroup` with a `value` prop.

### DrawerClose

Close button component. Styled wrapper for `Drawer.Close` from Vase UI.

### DrawerPortal

Portal component for rendering outside the DOM hierarchy. Alias for `Drawer.Portal` from Vase UI.

### DrawerBackdrop

Backdrop/overlay component. Styled wrapper for `Drawer.Backdrop` from Vase UI.

### DrawerViewport

Viewport component for positioning. Styled wrapper for `Drawer.Viewport` from Vase UI. Typically not used directly. `DrawerPopup` renders it internally.

### DrawerBar

Drag handle indicator shown when `showBar` is true on `DrawerPopup`. Typically not used directly.

### DrawerSwipeArea

An invisible edge area that opens the drawer when swiped. Styled wrapper for `Drawer.SwipeArea` from Vase UI, positioned at the edge given by the drawer's `position`.

### DrawerContent

Primitive content wrapper that reduces swipe interference during text selection. Alias for `Drawer.Content` from Vase UI.

## Examples

### Inset variant

<ComponentPreview name="drawer-4" />

### Straight variant

<ComponentPreview name="drawer-5" />

### Scrollable content

<ComponentPreview name="drawer-6" />

### Software keyboard

Bottom drawers automatically handle software-keyboard focus and spacing for inputs, textareas, and contenteditable fields. No additional prop is needed. Drawers without a focused input keep their normal layout. With snap points, the drawer moves up as needed while the keyboard is open and returns to the selected snap point when it closes.

Put scrolling fields in `DrawerPanel`. For a persistent input or action row, place it after the panel, outside its scroll area. Set `--drawer-height` on `DrawerPopup` when the layout needs a fixed height; keyboard handling does not set the drawer height.

<ComponentPreview name="drawer-15" />

```vue
<Drawer>
  <DrawerTrigger>Open chat</DrawerTrigger>
  <DrawerPopup class="[--drawer-height:calc(100dvh-3rem)]">
    <DrawerHeader><DrawerTitle>Chat</DrawerTitle></DrawerHeader>
    <div class="min-h-0 flex-1">
      <DrawerPanel>Conversation</DrawerPanel>
    </div>
    <form class="mx-3 mb-3 flex items-end gap-2" @submit.prevent="onSend">
      <Textarea v-model:value="message" aria-label="Message" />
      <Button aria-label="Send message" size="icon" type="submit">
        <ArrowUpIcon aria-hidden="true" />
      </Button>
    </form>
  </DrawerPopup>
</Drawer>
```

### Nested drawers

<ComponentPreview name="drawer-7" />

### Snap points

<ComponentPreview name="drawer-9" />

### Mobile menu

<ComponentPreview name="drawer-11" />

### Responsive dialog

Use `Drawer` on small screens and `Dialog` on larger ones to show the same content in a modal on desktop and a bottom sheet on mobile.

<ComponentPreview name="drawer-12" />

### Responsive menu

Pair `Drawer` with `Menu` so actions appear in a dropdown on desktop and a swipe-up sheet on mobile. Use `DrawerMenuTrigger` for items that open nested drawers on mobile. Nested drawers use `DrawerMenuGroupLabel` as section titles; swipe to go back.

<ComponentPreview name="drawer-13" />
