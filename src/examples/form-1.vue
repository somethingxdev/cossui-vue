<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import { Field, FieldError, FieldLabel } from '../components/ui/field'
import { Form } from '../components/ui/form'
import { Input } from '../components/ui/input'

const loading = shallowRef(false)

async function onSubmit(event: SubmitEvent) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget as HTMLFormElement)
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  loading.value = false
  // eslint-disable-next-line no-alert
  alert(`Email: ${String(formData.get('email') ?? '')}`)
}
</script>

<template>
  <Form class="flex w-full max-w-64 flex-col gap-4" @submit="onSubmit">
    <Field name="email">
      <FieldLabel>Email</FieldLabel>
      <Input placeholder="you@example.com" required type="email" />
      <FieldError>Please enter a valid email.</FieldError>
    </Field>
    <Button :loading="loading" type="submit">
      Submit
    </Button>
  </Form>
</template>
