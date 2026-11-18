---
preview: dialog-1
---

## Usage

```ts
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
```

```vue
<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogPopup>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog Description</DialogDescription>
    </DialogHeader>
    <DialogPanel>Content</DialogPanel>
    <DialogFooter>
      <DialogClose>Close</DialogClose>
    </DialogFooter>
  </DialogPopup>
</Dialog>
```

## API Reference

### Dialog

Root component. Alias for `Dialog.Root` from Vase UI. Supports `v-model:open`.

### DialogTrigger

Trigger button that opens the dialog. Styled wrapper for `Dialog.Trigger` from Vase UI.

### DialogCreateHandle

Creates a handle for detached dialog triggers. Use it when the trigger and popup need to be coordinated across different parts of the tree.

### DialogPopup

Popup container that displays the dialog content. Also exported as `DialogContent`.

| Prop                  | Type                | Default | Description                                                                                              |
| --------------------- | ------------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| `showCloseButton`     | `boolean`           | `true`  | When true, displays a close button in the top-right corner                                               |
| `bottomStickOnMobile` | `boolean`           | `true`  | When true, sticks to the bottom of the screen on mobile devices                                          |
| `closeProps`          | `DialogCloseProps`  | -       | Props forwarded to the internal close button                                                             |
| `portalProps`         | `DialogPortalProps` | -       | Props forwarded to the internal portal (`keepMounted`, `container`, etc.); see Vase UI Dialog portal API |

### DialogHeader

Container for the dialog title and description.

### DialogFooter

Footer section for action buttons.

| Prop      | Type                  | Default     | Description                                                                                |
| --------- | --------------------- | ----------- | ------------------------------------------------------------------------------------------ |
| `variant` | `"default" \| "bare"` | `"default"` | Controls the footer styling. `default` includes border and background, `bare` removes them |

**Example:**

```vue
<!-- Default variant (with border and background) -->
<DialogFooter>
  <DialogClose>Cancel</DialogClose>
  <Button>Save</Button>
</DialogFooter>

<!-- Bare variant (no border or background) -->
<DialogFooter variant="bare">
  <DialogClose>Cancel</DialogClose>
  <Button>Save</Button>
</DialogFooter>
```

### DialogTitle

Title component. Styled wrapper for `Dialog.Title` from Vase UI.

### DialogDescription

Description component. Styled wrapper for `Dialog.Description` from Vase UI.

### DialogPanel

Scrollable content container. Automatically wraps content in a `ScrollArea` component.

| Prop         | Type      | Default | Description                                    |
| ------------ | --------- | ------- | ---------------------------------------------- |
| `scrollFade` | `boolean` | `true`  | When true, shows a fade effect at scroll edges |

**Example:**

```vue
<DialogPanel>
  <!-- Long content that will scroll if it exceeds the dialog height -->
  <div>...</div>
</DialogPanel>
```

### DialogClose

Close button component. Styled wrapper for `Dialog.Close` from Vase UI.

### DialogPortal

Portal component for rendering outside the DOM hierarchy. Alias for `Dialog.Portal` from Vase UI.

### DialogBackdrop

Backdrop/overlay component. Also exported as `DialogOverlay`. Styled wrapper for `Dialog.Backdrop` from Vase UI.

### DialogViewport

Viewport component for positioning. Styled wrapper for `Dialog.Viewport` from Vase UI.

## Examples

### Open from a Menu

<ComponentPreview name="dialog-2" />

### Dialog with Bare Footer

<ComponentPreview name="dialog-6" />

### Dialog with scroll inside

<ComponentPreview name="dialog-5" />

### Nested Dialogs

<ComponentPreview name="dialog-3" />

### Close Confirmation

<ComponentPreview name="dialog-4" />
