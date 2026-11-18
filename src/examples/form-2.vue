<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import { Field, FieldError, FieldLabel } from '../components/ui/field'
import { Form } from '../components/ui/form'
import { Input } from '../components/ui/input'

type Errors = Record<string, string | string[]>

// With zod: `schema.safeParse(Object.fromEntries(formData))`, then `z.flattenError(result.error).fieldErrors`.
function validate(formData: FormData): Errors {
  const errors: Errors = {}
  const name = String(formData.get('name') ?? '')
  const age = Number(formData.get('age'))
  if (!name)
    errors.name = 'Please enter a name.'
  if (Number.isNaN(age))
    errors.age = 'Please enter a number.'
  else if (age <= 0)
    errors.age = 'Number must be positive.'
  return errors
}

const loading = shallowRef(false)
const errors = shallowRef<Errors>({})

async function onSubmit(event: SubmitEvent) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget as HTMLFormElement)
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  errors.value = validate(formData)
  loading.value = false
  if (Object.keys(errors.value).length === 0) {
    // eslint-disable-next-line no-alert
    alert(`Name: ${String(formData.get('name') ?? '')}\nAge: ${String(formData.get('age') ?? '')}`)
  }
}
</script>

<template>
  <Form class="flex w-full max-w-64 flex-col gap-4" :errors="errors" @submit="onSubmit">
    <Field name="name">
      <FieldLabel>Name</FieldLabel>
      <Input placeholder="Enter name" />
      <FieldError />
    </Field>
    <Field name="age">
      <FieldLabel>Age</FieldLabel>
      <Input placeholder="Enter age" />
      <FieldError />
    </Field>
    <Button :loading="loading" type="submit">
      Submit
    </Button>
  </Form>
</template>
