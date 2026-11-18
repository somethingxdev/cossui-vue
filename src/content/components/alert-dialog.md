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

Root component. Alias for `AlertDialog` from [UI SDK](https://ui-sdk.dev/docs/components/alert-dialog). Supports `v-model:open`. An alert dialog is always modal and never closes on an outside press.

### AlertDialogTrigger

Trigger button that opens the alert dialog. Wrapper for `AlertDialogTrigger` from UI SDK. Pass `as` to render another component, such as `Button`.

### AlertDialogPopup

Popup container that displays the alert dialog content. Styled wrapper for `AlertDialogContent` from UI SDK, which renders in the browser's top layer, so there is no portal. Also exported as `AlertDialogContent`.

| Prop                  | Type      | Default | Description                                                     |
| --------------------- | --------- | ------- | --------------------------------------------------------------- |
| `bottomStickOnMobile` | `boolean` | `true`  | When true, sticks to the bottom of the screen on mobile devices |

Other props, such as `keepMounted`, `container`, `initialFocus` and `finalFocus`, are forwarded to `AlertDialogContent`.

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

Title component. Styled wrapper for `AlertDialogTitle` from UI SDK.

### AlertDialogDescription

Description component. Styled wrapper for `AlertDialogDescription` from UI SDK.

### AlertDialogClose

Close button component. Wrapper for `AlertDialogClose` from UI SDK. Pass `as` to render another component, and `value` to report which answer closed the dialog.

### AlertDialogBackdrop

Backdrop/overlay component. Also exported as `AlertDialogOverlay`. Styled wrapper for `AlertDialogBackdrop` from UI SDK. `AlertDialogPopup` renders it internally.

### createAlertDialogController

Creates a controller that opens and closes an alert dialog from anywhere. Pass it to `AlertDialog` as `controller`.

## Examples

### Alert Dialog with Bare Footer

<ComponentPreview name="alert-dialog-2" />

### Close Confirmation

<ComponentPreview name="dialog-4" />
