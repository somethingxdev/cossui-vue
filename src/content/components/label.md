---
preview: input-6
---

## Usage

```ts
import { Label } from '@/components/ui/label'
```

```vue
<Label for="email">
Email
</Label>
```

## API Reference

This is a plain styled native `<label>` element, not a UI SDK wrapper.

### Label

A label component for form controls. All native `<label>` attributes (such as `for`) are passed through.

| Prop    | Type     | Default | Description                                       |
| ------- | -------- | ------- | ------------------------------------------------- |
| `class` | `string` | -       | Additional classes merged with the default styles |

## Examples

For accessible labelling and validation, prefer using the `FieldLabel` component. See some [related examples](/docs/components/field).

### With Checkbox

<ComponentPreview name="label-1" />
