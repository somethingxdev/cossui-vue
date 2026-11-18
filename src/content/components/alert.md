---
preview: alert-1
---

## Usage

```ts
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
```

```vue
<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
```

## API Reference

This is a custom component built with plain elements, not a wrapper of a UI SDK part.

### Alert

Root container for the alert.

| Prop      | Type                                                       | Default     | Description                                 |
| --------- | ---------------------------------------------------------- | ----------- | ------------------------------------------- |
| `variant` | `"default" \| "error" \| "info" \| "success" \| "warning"` | `"default"` | Controls the alert styling and color scheme |

### AlertTitle

Title text for the alert. Renders as a styled `div`.

### AlertDescription

Description text for the alert. Renders as a styled `div` with muted foreground color.

### AlertAction

Container for action buttons. Automatically positions to the right on larger screens.

## Examples

### With Icon

<ComponentPreview name="alert-2" />

### With Icon and Action Buttons

<ComponentPreview name="alert-3" />

### Info Alert

<ComponentPreview name="alert-4" />

### Success Alert

<ComponentPreview name="alert-5" />

### Warning Alert

<ComponentPreview name="alert-6" />

### Error Alert

<ComponentPreview name="alert-7" />
