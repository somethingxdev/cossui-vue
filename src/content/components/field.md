---
preview: field-1
---

## Usage

```ts
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
```

```vue
<Field>
  <FieldLabel>Name</FieldLabel>
  <Input type="text" placeholder="Enter your name" />
  <FieldDescription>Visible on your profile</FieldDescription>
  <FieldError>Please enter a valid name</FieldError>
</Field>
```

## API Reference

### Field

Root component. Styled wrapper for [`Field`](https://ui-sdk.dev/docs/components/field) from UI SDK with flex column layout. Use `as` to render another element or component, such as `Fieldset`.

| Prop       | Type                  | Description                                                                                                          |
| ---------- | --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `name`     | `string`              | The name the control submits under when it has none. Also the key of this field's error in `Form`'s `errors`         |
| `invalid`  | `boolean`             | `true` shows the field's errors now, `false` never. Leave it out to show the browser's validation after a submit try |
| `disabled` | `boolean`             | Disables the control and marks every part with `data-disabled`                                                       |
| `as`       | `string \| Component` | The element or component to render instead of a `<div>`                                                              |

Errors show after a submit attempt, or after Enter in an input that is not in a form, and then update as the value changes. Every part gets `data-invalid`, `data-valid`, `data-focused`, `data-required` and `data-disabled`; an invalid control also gets `aria-invalid`.

### FieldLabel

Label for the field. Styled wrapper for `FieldLabel` from UI SDK.

### FieldItem

Container for one item of a checkbox or radio group. UI SDK has no such part, so this is a `Field` of its own: a `FieldLabel` inside it names that item's control.

### FieldDescription

Description text for the field. Styled wrapper for `FieldDescription` from UI SDK with muted foreground color. The default slot receives the field `state` (`disabled`, `required`, `focused`, `invalid`, `valid`).

### FieldError

Error message for the field. Styled wrapper for `FieldError` from UI SDK with destructive foreground color. Without a default slot it shows the field's error from `Form`'s `errors`, or else the native validation message; the default slot receives the field `state`, including `message`. Use `match` (for example `match="valueMissing"`) to show it for one kind of problem only.

### FieldControl

Alias for `FieldControl` from UI SDK. It renders an `<input>`, or another native control such as a `<select>` through its `render` slot, and connects it to the field for labelling, validation, and error state.

`Input`, `Textarea` and the other controls here connect to `Field` on their own and do not need `FieldControl`.

## Examples

### Required Field

<ComponentPreview name="field-2" />

### Disabled Field

<ComponentPreview name="field-3" />

### With Error

Enter an invalid email address and press enter to see the error.

<ComponentPreview name="field-4" />

### With Validity

The default slot of `FieldDescription` and `FieldError` receives the field state.

<ComponentPreview name="field-5" />

### Input Group

<ComponentPreview name="field-6" />

### Autocomplete Field

<ComponentPreview name="field-7" />

### Combobox Field

<ComponentPreview name="field-8" />

### Combobox Multiple Field

<ComponentPreview name="field-9" />

### Textarea Field

<ComponentPreview name="field-10" />

### Select Field

<ComponentPreview name="field-11" />

### Checkbox Field

<ComponentPreview name="field-12" />

### Checkbox Group Field

<ComponentPreview name="field-13" />

### Radio Group Field

<ComponentPreview name="field-14" />

### Switch Field

<ComponentPreview name="field-15" />

### Slider Field

<ComponentPreview name="field-16" />

### Number Field

<ComponentPreview name="field-17" />

### Complete Form Example

<ComponentPreview name="field-18" />
