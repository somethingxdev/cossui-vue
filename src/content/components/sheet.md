---
preview: sheet-1
---

## Usage

```ts
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
```

```vue
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetPopup>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
    <SheetPanel>Content</SheetPanel>
    <SheetFooter>
      <SheetClose>Close</SheetClose>
    </SheetFooter>
  </SheetPopup>
</Sheet>
```

## API Reference

### Sheet

Root component. Alias for `Dialog.Root` from Vase UI. Supports `v-model:open`.

### SheetTrigger

Trigger button that opens the sheet. Styled wrapper for `Dialog.Trigger` from Vase UI.

### SheetPopup

Popup container that displays the sheet content. Also exported as `SheetContent`.

| Prop              | Type                                     | Default     | Description                                                                                              |
| ----------------- | ---------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `side`            | `"right" \| "left" \| "top" \| "bottom"` | `"right"`   | Controls which side of the screen the sheet opens from                                                   |
| `variant`         | `"default" \| "inset"`                   | `"default"` | Controls the sheet style. `inset` adds spacing around the sheet on desktop screens                       |
| `showCloseButton` | `boolean`                                | `true`      | When true, displays a close button in the top-right corner                                               |
| `closeProps`      | `DialogCloseProps`                       | -           | Props forwarded to the internal close button                                                             |
| `portalProps`     | `DialogPortalProps`                      | -           | Props forwarded to the internal portal (`keepMounted`, `container`, etc.); see Vase UI Dialog portal API |

**Example:**

```vue
<!-- Right side sheet (default) -->
<SheetPopup side="right">
  ...
</SheetPopup>

<!-- Left side sheet -->
<SheetPopup side="left">
  ...
</SheetPopup>

<!-- Top sheet -->
<SheetPopup side="top">
  ...
</SheetPopup>

<!-- Bottom sheet -->
<SheetPopup side="bottom">
  ...
</SheetPopup>

<!-- Sheet with inset variant -->
<SheetPopup side="right" variant="inset">
  ...
</SheetPopup>
```

### SheetHeader

Container for the sheet title and description.

### SheetFooter

Footer section for action buttons.

| Prop      | Type                  | Default     | Description                                                                                |
| --------- | --------------------- | ----------- | ------------------------------------------------------------------------------------------ |
| `variant` | `"default" \| "bare"` | `"default"` | Controls the footer styling. `default` includes border and background, `bare` removes them |

### SheetTitle

Title component. Styled wrapper for `Dialog.Title` from Vase UI.

### SheetDescription

Description component. Styled wrapper for `Dialog.Description` from Vase UI.

### SheetPanel

Scrollable content container. Automatically wraps content in a `ScrollArea` component.

| Prop         | Type      | Default | Description                                    |
| ------------ | --------- | ------- | ---------------------------------------------- |
| `scrollFade` | `boolean` | `true`  | When true, shows a fade effect at scroll edges |

**Example:**

```vue
<SheetPanel>
  <!-- Long content that will scroll if it exceeds the sheet height -->
  <div>...</div>
</SheetPanel>
```

### SheetClose

Close button component. Styled wrapper for `Dialog.Close` from Vase UI.

### SheetPortal

Portal component for rendering outside the DOM hierarchy. Alias for `Dialog.Portal` from Vase UI.

### SheetBackdrop

Backdrop/overlay component. Also exported as `SheetOverlay`. Styled wrapper for `Dialog.Backdrop` from Vase UI.

## Examples

### Sheet with Inset

<ComponentPreview name="sheet-2" />

### Side sheets

<ComponentPreview name="sheet-3" />
