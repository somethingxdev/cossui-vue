---
preview: textarea-1
---

## Usage

```ts
import { Textarea } from '@/components/ui/textarea'
```

```vue
<Textarea />
```

## Field Integration

This component wraps `Textarea` from UI SDK, which integrates with `Field` out of the box, with no need to wrap it in a `FieldControl`.

```vue
<Field>
  <FieldLabel>Bio</FieldLabel>
  <Textarea placeholder="Tell us about yourself…" />
  <FieldDescription>Write a short bio.</FieldDescription>
  <FieldError>This field is required.</FieldError>
</Field>
```

## API Reference

### Textarea

Styled wrapper for [`Textarea`](https://ui-sdk.dev/docs/components/textarea) from UI SDK with custom size options.

| Prop       | Type                                  | Default     | Description                                                 |
| ---------- | ------------------------------------- | ----------- | ----------------------------------------------------------- |
| `size`     | `"sm" \| "default" \| "lg" \| number` | `"default"` | Controls the textarea padding                               |
| `unstyled` | `boolean`                             | `false`     | When true, removes all default styling                      |
| `value`    | `string`                              | -           | The textarea value. Use `v-model:value` for two-way binding |

Other attributes (`placeholder`, `rows`, `disabled`, …) are passed to the inner `<textarea>`; `class` goes to the wrapper.

## Examples

### Small Size

<ComponentPreview name="textarea-2" />

### Large Size

<ComponentPreview name="textarea-3" />

### Disabled

<ComponentPreview name="textarea-4" />

### With Label

<ComponentPreview name="textarea-5" />

### Form Integration

<ComponentPreview name="textarea-6" />
