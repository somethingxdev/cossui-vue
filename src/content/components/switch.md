---
preview: switch-1
---

## Usage

```ts
import { Switch } from '@/components/ui/switch'
```

```vue
<Switch />
```

## API Reference

### Switch

Styled wrapper for [`Switch`](https://ui-sdk.dev/docs/components/switch) from UI SDK with built-in thumb. Size is controlled via the `--thumb-size` CSS variable. Supports `v-model:checked`.

## Examples

For accessible labelling and validation, prefer using the `Field` component to wrap checkboxes. See the related example: [Switch field](/docs/components/field#switch-field).

### Disabled

<ComponentPreview name="switch-2" />

### With Description

<ComponentPreview name="switch-3" />

### Customizing Size

The switch size is controlled by the `--thumb-size` CSS variable. By default, the switch uses responsive sizing with `[--thumb-size:--spacing(5)] sm:[--thumb-size:--spacing(4)]` classes, making it slightly larger on mobile devices (like other interactive elements).

You can customize the size by overriding these CSS variable classes on the component. The `--thumb-size` value can be expressed using:

- The spacing scale: `--spacing(3)`, `--spacing(4)`, `--spacing(5)`, etc.
- Fixed units: `1rem`, `16px`, etc.

<ComponentPreview name="switch-6" />

### Card Style

<ComponentPreview name="switch-4" />

### Form Integration

<ComponentPreview name="switch-5" />
