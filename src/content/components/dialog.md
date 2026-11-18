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

Root component. Alias for `Dialog` from UI SDK. Supports `v-model:open`.

### DialogTrigger

Trigger button that opens the dialog. Wrapper for `DialogTrigger` from UI SDK. Pass `as` to render it as another component, such as `Button`.

### createDialogController

Creates a controller for detached dialog triggers, from UI SDK. Pass it as `controller` to the `Dialog` and to triggers elsewhere in the tree, or call `open()` and `close()` on it.

### DialogPopup

Popup container that displays the dialog content, with its backdrop. Styled wrapper for `DialogContent` from UI SDK, which renders in the browser's top layer. Also exported as `DialogContent`.

| Prop                  | Type               | Default | Description                                                     |
| --------------------- | ------------------ | ------- | --------------------------------------------------------------- |
| `showCloseButton`     | `boolean`          | `true`  | When true, displays a close button in the top-right corner      |
| `bottomStickOnMobile` | `boolean`          | `true`  | When true, sticks to the bottom of the screen on mobile devices |
| `closeProps`          | `DialogCloseProps` | -       | Props forwarded to the internal close button                    |

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

Title component. Styled wrapper for `DialogTitle` from UI SDK.

### DialogDescription

Description component. Styled wrapper for `DialogDescription` from UI SDK.

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

Close button component. Wrapper for `DialogClose` from UI SDK. Pass `as` to render it as another component, such as `Button`.

### DialogBackdrop

Backdrop/overlay component. Also exported as `DialogOverlay`. Styled wrapper for `DialogBackdrop` from UI SDK.

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
