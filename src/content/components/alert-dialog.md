---
preview: alert-dialog-1
---

## Usage

```ts
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
```

```vue
<AlertDialog>
  <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
  <AlertDialogPopup>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogClose>Cancel</AlertDialogClose>
      <AlertDialogClose>Delete Account</AlertDialogClose>
    </AlertDialogFooter>
  </AlertDialogPopup>
</AlertDialog>
```

## API Reference

### AlertDialog

Root component. Alias for `AlertDialog.Root` from Vase UI. Supports `v-model:open`.

### AlertDialogTrigger

Trigger button that opens the alert dialog. Styled wrapper for `AlertDialog.Trigger` from Vase UI.

### AlertDialogPopup

Popup container that displays the alert dialog content. Also exported as `AlertDialogContent`.

| Prop                  | Type                     | Default | Description                                                                                                    |
| --------------------- | ------------------------ | ------- | -------------------------------------------------------------------------------------------------------------- |
| `bottomStickOnMobile` | `boolean`                | `true`  | When true, sticks to the bottom of the screen on mobile devices                                                |
| `portalProps`         | `AlertDialogPortalProps` | -       | Props forwarded to the internal portal (`keepMounted`, `container`, etc.); see Vase UI Alert Dialog portal API |

### AlertDialogHeader

Container for the alert dialog title and description.

### AlertDialogFooter

Footer section for action buttons.

Unlike [Dialog](/docs/components/dialog), alert dialog has no `AlertDialogPanel`. Put title and description in `AlertDialogHeader`, actions in `AlertDialogFooter`, and use a plain element with `class` if you need extra body content between them.

| Prop      | Type                  | Default     | Description                                                                                |
| --------- | --------------------- | ----------- | ------------------------------------------------------------------------------------------ |
| `variant` | `"default" \| "bare"` | `"default"` | Controls the footer styling. `default` includes border and background, `bare` removes them |

**Example:**

```vue
<!-- Default variant (with border and background) -->
<AlertDialogFooter>
  <AlertDialogClose>Cancel</AlertDialogClose>
  <AlertDialogClose>Delete</AlertDialogClose>
</AlertDialogFooter>

<!-- Bare variant (no border or background) -->
<AlertDialogFooter variant="bare">
  <AlertDialogClose>Cancel</AlertDialogClose>
  <AlertDialogClose>Delete</AlertDialogClose>
</AlertDialogFooter>
```

### AlertDialogTitle

Title component. Styled wrapper for `AlertDialog.Title` from Vase UI.

### AlertDialogDescription

Description component. Styled wrapper for `AlertDialog.Description` from Vase UI.

### AlertDialogClose

Close button component. Styled wrapper for `AlertDialog.Close` from Vase UI.

### AlertDialogPortal

Portal component for rendering outside the DOM hierarchy. Alias for `AlertDialog.Portal` from Vase UI.

### AlertDialogBackdrop

Backdrop/overlay component. Also exported as `AlertDialogOverlay`. Styled wrapper for `AlertDialog.Backdrop` from Vase UI.

### AlertDialogViewport

Viewport component for positioning. Styled wrapper for `AlertDialog.Viewport` from Vase UI.

## Examples

### Alert Dialog with Bare Footer

<ComponentPreview name="alert-dialog-2" />

### Close Confirmation

<ComponentPreview name="dialog-4" />
