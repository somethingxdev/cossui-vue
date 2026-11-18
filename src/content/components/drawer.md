---
preview: drawer-1
---

## Usage

```ts
import {
  Drawer,
  DrawerClose,
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

Root component. Wraps `Drawer` from [UI SDK](https://ui-sdk.dev/docs/components/drawer) and passes `position` to it as `side`.

| Prop       | Type                                     | Default    | Description                                                                                                   |
| ---------- | ---------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| `position` | `"right" \| "left" \| "top" \| "bottom"` | `"bottom"` | Controls which edge the drawer opens from and is swiped back to. Flows to child components via provide/inject |

All other props from UI SDK's `Drawer` are supported, including `v-model:open`, `modal`, `dismissible`, `snapPoints`, `defaultSnapPoint`, `v-model:snap-point`, and `expandOnScroll`. A snap point is a fraction of the screen up to `1`, a pixel number above `1`, a `"300px"`, `"20rem"` or `"50%"` string, or `"content"`.

### DrawerCreateHandle

Creates a controller for detached drawer triggers. Alias for `createDrawerController` from UI SDK. Pass it as `controller` to `Drawer` and to triggers outside it, or call its `open()`, `close()` and `setSnapPoint()` yourself.

### DrawerTrigger

Trigger button that opens the drawer. Wrapper for `DrawerTrigger` from UI SDK. Pass `as` to render another component, such as `Button`.

### DrawerPopup

Popup container that displays the drawer content. Styled wrapper for `DrawerContent` from UI SDK, which renders in the browser's top layer, positions the sheet and moves it, so there is no portal or viewport.

| Prop              | Type                                     | Default     | Description                                                                                                              |
| ----------------- | ---------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| `variant`         | `"default" \| "straight" \| "inset"`     | `"default"` | Controls the drawer style. `straight` removes rounded corners, `inset` adds spacing around the drawer on desktop screens |
| `showCloseButton` | `boolean`                                | `false`     | When true, displays a close button in the top-right corner                                                               |
| `showBar`         | `boolean`                                | `false`     | When true, displays a drag bar indicator                                                                                 |
| `position`        | `"right" \| "left" \| "top" \| "bottom"` | inherited   | Styles the popup for another edge than the parent `Drawer` provides. The edge it opens from is always the `Drawer`'s     |

Other props, such as `keepMounted`, `container`, `initialFocus` and `finalFocus`, are forwarded to `DrawerContent`.

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

| Prop             | Type      | Default | Description                                                                                 |
| ---------------- | --------- | ------- | ------------------------------------------------------------------------------------------- |
| `allowSelection` | `boolean` | `false` | When true, a mouse drag that starts on the header selects text instead of moving the drawer |

### DrawerFooter

Footer section for action buttons.

| Prop             | Type                  | Default     | Description                                                                                 |
| ---------------- | --------------------- | ----------- | ------------------------------------------------------------------------------------------- |
| `variant`        | `"default" \| "bare"` | `"default"` | Controls the footer styling. `default` includes border and background, `bare` removes them  |
| `allowSelection` | `boolean`             | `true`      | When true, a mouse drag that starts on the footer selects text instead of moving the drawer |

### DrawerTitle

Title component. Styled wrapper for `DrawerTitle` from UI SDK.

### DrawerDescription

Description component. Styled wrapper for `DrawerDescription` from UI SDK.

### DrawerPanel

Content container. When `scrollable` is true (default), wraps content in a `ScrollArea` component.

| Prop             | Type      | Default | Description                                                                                |
| ---------------- | --------- | ------- | ------------------------------------------------------------------------------------------ |
| `scrollable`     | `boolean` | `true`  | When true, wraps content in a `ScrollArea`. Set to false for non-scrollable content        |
| `scrollFade`     | `boolean` | `true`  | When true, shows a fade effect at scroll edges (only applies when `scrollable` is true)    |
| `allowSelection` | `boolean` | `true`  | When true, a mouse drag that starts on the panel selects text instead of moving the drawer |

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

Trigger that opens a nested drawer. Styled like a menu item with a trailing chevron. Use for menu items that open nested drawers (e.g. "Add to Playlist" → nested drawer with playlist options). Wraps `DrawerTrigger` from UI SDK internally.

**Example:** `<DrawerMenuTrigger>Add to Playlist</DrawerMenuTrigger>` opens a nested drawer when tapped.

### DrawerMenuCheckboxItem

Checkbox menu item for independent toggles. Supports `variant="switch"` for toggle-style switches. For selection groups, use `DrawerMenuRadioGroup` with `DrawerMenuRadioItem`.

### DrawerMenuRadioGroup

Container for radio menu items. Use with `DrawerMenuRadioItem` for mutually exclusive options (e.g. "Sort by" with Artist, Album, Title).

### DrawerMenuRadioItem

Radio menu item. Must be used inside `DrawerMenuRadioGroup` with a `value` prop.

### DrawerClose

Close button component. Wrapper for `DrawerClose` from UI SDK. Pass `as` to render another component.

### DrawerBackdrop

Backdrop/overlay component. Styled wrapper for `DrawerBackdrop` from UI SDK, which drives its opacity as the drawer moves. `DrawerPopup` renders it internally.

### DrawerBar

Drag handle indicator shown when `showBar` is true on `DrawerPopup`. Typically not used directly.

## Examples

### Inset variant

<ComponentPreview name="drawer-4" />

### Straight variant

<ComponentPreview name="drawer-5" />

### Scrollable content

<ComponentPreview name="drawer-6" />

### Software keyboard

UI SDK shrinks the drawer's viewport while the software keyboard is open, so the sheet stays above it and the focused field can scroll into view. No additional prop is needed.

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
