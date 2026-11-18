---
preview: toast-1
---

## Usage

### Stacked Toasts

```ts
import { toastManager } from '@/components/ui/toast'
```

```ts
toastManager.add({
  title: 'Event has been created',
  description: 'Monday, January 3rd at 6:00pm',
})
```

By default, toasts appear in the **bottom-right** corner. You can change this by setting the `position` prop on the `ToastProvider`.

Allowed values: `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`. For example:

```vue
<ToastProvider position="top-center">
  <slot />
</ToastProvider>
```

### Deduplicated toasts (upsert)

Pass a stable `id` when calling `toastManager.add`. If a toast with that `id` is still showing, UI SDK updates it in place, restarts the auto-dismiss timer, and increments its `version`. The styled toast replays a short re-notify animation on each update.

```ts
toastManager.add({
  id: 'save-status',
  title: 'Saved',
  description: 'Your draft was updated.',
})
```

<ComponentPreview name="toast-10" />

### Anchored Toasts

For toasts positioned relative to a specific element, use `anchoredToastManager`. The `AnchoredToastProvider` is typically added to your app layout (alongside `ToastProvider`), so you can use `anchoredToastManager` directly in your components:

```ts
anchoredToastManager.add({
  title: 'Copied!',
  positionerProps: {
    anchor: buttonRef.value,
  },
})
```

You can also style anchored toasts like tooltips by passing `data: { tooltipStyle: true }`. When using tooltip style, only the `title` is displayed (description and other content are ignored):

```ts
anchoredToastManager.add({
  title: 'Copied!',
  positionerProps: {
    anchor: buttonRef.value,
  },
  data: {
    tooltipStyle: true,
  },
})
```

<ComponentPreview name="toast-12" />

## API Reference

### ToastProvider

Renders its slot and the styled `ToastRegion` from UI SDK for `toastManager`. The region shows in the browser's top layer, so there is no portal. Other attributes, such as `max-visible`, `expanded` and `shortcut`, are forwarded to the region.

| Prop       | Type                                                                                              | Default          | Description                  |
| ---------- | ------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------- |
| `position` | `"top-left" \| "top-center" \| "top-right" \| "bottom-left" \| "bottom-center" \| "bottom-right"` | `"bottom-right"` | Position of the toast region |

### AnchoredToastProvider

Renders its slot and the region for toasts anchored to specific elements. Use with `anchoredToastManager`. It takes no props of its own; attributes are forwarded to the `ToastRegion`.

### toastManager

Manager object for creating stacked toasts, built on a UI SDK toaster.

| Method                       | Description                                                                                                     |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `add(options)`               | Shows a toast and returns its id. Pass the same `id` later to update that toast in place instead of stacking it |
| `update(id, options)`        | Updates a toast; returns whether it was still showing                                                           |
| `close(id?)`                 | Closes one toast, or every toast without an id                                                                  |
| `promise(promise, messages)` | Shows `loading`, then `success` or `error` in the same toast. Returns the toast's id                            |

`options` are the [UI SDK toast options](https://ui-sdk.dev/docs/components/toast#api-reference): `title`, `description`, `type`, `duration` (milliseconds, `Infinity` to keep it; a `loading` toast stays until updated), `action: { label, onAction }`, `cancel`, `dismissible`, `data` and `onDismiss`.

### anchoredToastManager

Manager object for creating anchored toasts, with `add(options)` and `close(id?)`. Use `anchoredToastManager.add()` with `positionerProps.anchor` to show a toast anchored to an element; `positionerProps` also takes `side` (`"top"` by default), `align`, `sideOffset`, `alignOffset` and `collisionPadding`. Repeated `add` calls with the same `id` update in place, same as stacked toasts.

The region, toast, title, description and action parts are rendered by the providers; the raw UI SDK parts are exported as `ToastPrimitive` if you need a custom layout.

## Examples

### With Status

<ComponentPreview name="toast-2" />

### Loading

<ComponentPreview name="toast-3" />

### With Action

<ComponentPreview name="toast-4" />

### Promise

<ComponentPreview name="toast-5" />

### With Varying Heights

<ComponentPreview name="toast-6" />

### Copy Button with Anchored Toast

<ComponentPreview name="toast-7" />

### Submit Button with Error Toast

<ComponentPreview name="toast-8" />
