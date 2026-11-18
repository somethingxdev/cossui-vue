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

Thin wrapper around a native `<form>` with no default layout; UI SDK has no form component, and its [`Field`](https://ui-sdk.dev/docs/components/field) works with native validation. Pass **`class`** for spacing and structure (for example `flex w-full flex-col gap-4` for a vertical field stack).

| Prop / Event | Type                                 | Description                                                                           |
| ------------ | ------------------------------------ | ------------------------------------------------------------------------------------- |
| `errors`     | `Record<string, string \| string[]>` | Server errors, keyed by field `name`. A field shows its error until the user edits it |
| `@submit`    | `(event: SubmitEvent) => void`       | The native submit event; fires only when the form is valid                            |

Fields validate with native constraints (`required`, `type`, `pattern`) when the form is submitted, then update as the value changes. All other attributes are passed to the `<form>`.

**Dialog, sheet, drawer:** Place **`DialogHeader`** (or sheet/drawer header) **outside** the form. Wrap **`DialogPanel`** and **`DialogFooter`** only in **`<Form class="contents">`** (or **`<form class="contents">`**). The **`contents`** display value keeps panel and footer participating correctly in the popup flex layout without nesting the header inside the `<form>`.

## Examples

### Using with Zod

This example validates by hand to stay dependency-free; swap `validate` for a zod schema's `safeParse` to use zod.

<ComponentPreview name="form-2" />
