---
preview: otp-field-1
---

## Usage

```ts
import {
  OTPField,
  OTPFieldInput,
  OTPFieldSeparator,
} from '@/components/ui/otp-field'
```

```vue
<OTPField aria-label="Verification code" :length="6">
  <OTPFieldInput :index="0" />
  <OTPFieldInput :index="1" />
  <OTPFieldInput :index="2" />
  <OTPFieldSeparator />
  <OTPFieldInput :index="3" />
  <OTPFieldInput :index="4" />
  <OTPFieldInput :index="5" />
</OTPField>
```

## API Reference

This component is built on [UI SDK OTP Input](https://ui-sdk.dev/docs/components/otp-input). The root holds one native `<input>` that handles typing, paste, autofill and form submission; each slot displays one character of its value.

### OTPField

Root component. Accepts the same props as `OTPInput` from UI SDK; `class` is merged with the default layout styles. Supports `v-model:value` and the `@value-change` and `@value-commit` events (`@value-commit` runs when every slot is filled). `id`, `aria-label`, `aria-describedby` and `aria-invalid` go to the input.

Use **`length`** (required) for the number of characters; it is passed to UI SDK as `max-length`.

| Prop      | Type                                                | Default     | Description                                                    |
| --------- | --------------------------------------------------- | ----------- | -------------------------------------------------------------- |
| `size`    | `"default" \| "lg"`                                 | `"default"` | Size applied to all slots in the field                         |
| `pattern` | `"digits" \| "letters" \| "alphanumeric" \| RegExp` | `"digits"`  | Which characters are accepted; anything else is ignored        |
| `mask`    | `boolean`                                           | `false`     | When `true`, each slot shows a bullet instead of its character |

### OTPFieldInput

Renders one character of the code. Styled wrapper for `OTPInputSlot` from UI SDK, with the active ring and a blinking caret.

| Prop          | Type     | Description                                                          |
| ------------- | -------- | -------------------------------------------------------------------- |
| `index`       | `number` | Required. Which character of the code the slot shows, from 0         |
| `class`       | `string` | Merged with the default slot styles                                  |
| `placeholder` | `string` | Hint shown while the slot is empty and is not the one typing goes to |

Label the OTP control on the root (`OTPField`) with `aria-label` or a visible `FieldLabel`. Slots are not separate inputs, so they take no labels of their own.

### OTPFieldSeparator

Visual separator between slot groups. Styled wrapper for `OTPInputSeparator` from UI SDK.

## Examples

### Large

<ComponentPreview name="otp-field-2" />

### With Separator

<ComponentPreview name="otp-field-3" />

### With Label

<ComponentPreview name="otp-field-4" />

### Custom pattern

Pass a regular expression as `pattern` to enforce custom character rules; characters that do not match are dropped when typed or pasted. Use `input-mode` for the virtual keyboard hint.

<ComponentPreview name="otp-field-6" />

### Auto Validation

<ComponentPreview name="otp-field-7" />

### Alphanumeric

Use `pattern="alphanumeric"` for recovery, backup, or invite codes that mix letters and numbers.

<ComponentPreview name="otp-field-8" />

### Placeholder hints

Pass `placeholder` to a slot to show a hint while it is empty. The hint hides in the active slot, where the caret is.

<ComponentPreview name="otp-field-9" />

### Masked entry

Pass `mask` on the root when the code should be obscured while it is typed (e.g. shared screens).

<ComponentPreview name="otp-field-10" />
