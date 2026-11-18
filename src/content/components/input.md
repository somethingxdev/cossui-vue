---
preview: input-1
---

## Usage

```ts
import { Input } from '@/components/ui/input'
```

```vue
<Input />
```

## API Reference

### Input

Styled wrapper for [`Input`](https://ui-sdk.dev/docs/components/input) from UI SDK with custom size options.

| Prop          | Type                                  | Default     | Description                                                                               |
| ------------- | ------------------------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| `size`        | `"sm" \| "default" \| "lg" \| number` | `"default"` | Controls the input height. Number values are passed to the native `size` attribute        |
| `unstyled`    | `boolean`                             | `false`     | When true, removes the wrapper styling (border, shadow, etc.)                             |
| `nativeInput` | `boolean`                             | `false`     | When true, renders a plain `<input>` instead of the UI SDK `Input` (no field integration) |
| `value`       | `string`                              | -           | The input value. Use `v-model:value` for two-way binding                                  |

Other attributes (`type`, `placeholder`, `disabled`, …) are passed to the inner `<input>`; `class` goes to the wrapper.

## Examples

For accessible labelling and validation, prefer using the `Field` component to wrap inputs, or the `FieldControl` component. See some [related examples](/docs/components/field).

### Small Size

<ComponentPreview name="input-2" />

### Large Size

<ComponentPreview name="input-3" />

### Disabled

<ComponentPreview name="input-4" />

### File

<ComponentPreview name="input-5" />

### With Label

<ComponentPreview name="input-6" />

### With Button

<ComponentPreview name="input-7" />

### Form Integration

<ComponentPreview name="form-1" />
