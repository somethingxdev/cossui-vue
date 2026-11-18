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

Pass a stable `id` when calling `toastManager.add`. If a toast with that `id` already exists, Vase UI updates it in place, refreshes the auto-dismiss timer, and increments `updateKey`. The styled toast replays a short re-notify animation on each update.

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

Provider component for stacked toasts. Wraps `Toast.Provider` from Vase UI and renders the styled toast viewport for `toastManager`.

| Prop          | Type                                                                                              | Default          | Description                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------- |
| `position`    | `"top-left" \| "top-center" \| "top-right" \| "bottom-left" \| "bottom-center" \| "bottom-right"` | `"bottom-right"` | Position of the toast viewport                                                           |
| `portalProps` | `ToastPortalProps`                                                                                | -                | Props forwarded to the internal portal (`container`, etc.); see Vase UI Toast portal API |

### AnchoredToastProvider

Provider component for toasts anchored to specific elements. Use with `anchoredToastManager`.

| Prop          | Type               | Default | Description                                                                              |
| ------------- | ------------------ | ------- | ---------------------------------------------------------------------------------------- |
| `portalProps` | `ToastPortalProps` | -       | Props forwarded to the internal portal (`container`, etc.); see Vase UI Toast portal API |

### toastManager

Manager object for creating stacked toasts. Use `toastManager.add()` to show a toast. Pass the same `id` on a later `add` to update that toast in place (dedupe) instead of stacking a duplicate.

### anchoredToastManager

Manager object for creating anchored toasts. Use `anchoredToastManager.add()` with `positionerProps.anchor` to show a toast anchored to an element. Repeated `add` calls with the same `id` update in place, same as stacked toasts.

The viewport, toast, title, description, action and close parts are rendered by the providers; the raw Vase UI parts are exported as `ToastPrimitive` if you need a custom layout.

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
