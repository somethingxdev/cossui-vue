---
preview: form-1
---

## Usage

```ts
import {
  Field,
  FieldError,
  FieldLabel,
} from '@/components/ui/field'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
```

```vue
<script setup lang="ts">
function onSubmit(event: SubmitEvent) {
  /* handle submit */
}
</script>

<template>
  <Form class="flex w-full flex-col gap-4" @submit="onSubmit">
    <Field>
      <FieldLabel>Email</FieldLabel>
      <Input name="email" type="email" required />
      <FieldError>Please enter a valid email.</FieldError>
    </Field>
  </Form>
</template>
```

## API Reference

### Form

Thin wrapper around Vase UI `Form` with no default layout. Pass **`class`** for spacing and structure (for example `flex w-full flex-col gap-4` for a vertical field stack).

| Prop / Event     | Type                                   | Description                                        |
| ---------------- | -------------------------------------- | -------------------------------------------------- |
| `errors`         | `Record<string, string \| string[]>`   | Server errors, keyed by field `name`               |
| `validationMode` | `"onSubmit" \| "onBlur" \| "onChange"` | When the fields validate. Defaults to `"onSubmit"` |
| `@submit`        | `(event: SubmitEvent) => void`         | The native submit event                            |
| `@form-submit`   | `(formValues, eventDetails) => void`   | Fires with the field values when the form is valid |

**Dialog, sheet, drawer:** Place **`DialogHeader`** (or sheet/drawer header) **outside** the form. Wrap **`DialogPanel`** and **`DialogFooter`** only in **`<Form class="contents">`** (or **`<form class="contents">`**). The **`contents`** display value keeps panel and footer participating correctly in the popup flex layout without nesting the header inside the `<form>`.

## Examples

### Using with Zod

This example validates by hand to stay dependency-free; swap `validate` for a zod schema's `safeParse` to use zod.

<ComponentPreview name="form-2" />
