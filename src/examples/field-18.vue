<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import { Checkbox } from '../components/ui/checkbox'
import { Field, FieldDescription, FieldError, FieldLabel } from '../components/ui/field'
import { Form } from '../components/ui/form'
import { Input } from '../components/ui/input'
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const roles = [
  { label: 'Select your role', value: null },
  { label: 'Developer', value: 'developer' },
  { label: 'Designer', value: 'designer' },
  { label: 'Product Manager', value: 'manager' },
  { label: 'Other', value: 'other' },
]

const loading = shallowRef(false)

async function onSubmit(event: SubmitEvent) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget as HTMLFormElement)
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  loading.value = false
  // eslint-disable-next-line no-alert
  alert(
    `Full name: ${String(formData.get('fullName') ?? '')}\nEmail: ${String(formData.get('email') ?? '')}\nRole: ${String(formData.get('role') ?? '')}\nNewsletter: ${String(formData.get('newsletter'))}`,
  )
}
</script>

<template>
  <Form class="flex w-full flex-col gap-4" @submit="onSubmit">
    <Field name="fullName">
      <FieldLabel>
        Full Name <span class="text-destructive">*</span>
      </FieldLabel>
      <Input placeholder="John Doe" required type="text" />
      <FieldError>Please enter a valid name.</FieldError>
    </Field>

    <Field name="email">
      <FieldLabel>
        Email <span class="text-destructive">*</span>
      </FieldLabel>
      <Input placeholder="john@example.com" required type="email" />
      <FieldError>Please enter a valid email.</FieldError>
    </Field>

    <Field name="role">
      <FieldLabel>Role</FieldLabel>
      <Select :items="roles">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectPopup>
          <SelectItem v-for="role in roles.slice(1)" :key="role.label" :value="role.value">
            {{ role.label }}
          </SelectItem>
        </SelectPopup>
      </Select>
      <FieldDescription>This is an optional field</FieldDescription>
    </Field>

    <Field name="newsletter">
      <div class="flex items-center gap-2">
        <Checkbox />
        <FieldLabel class="cursor-pointer">
          Subscribe to newsletter
        </FieldLabel>
      </div>
    </Field>

    <Button :loading="loading" type="submit">
      Submit
    </Button>
  </Form>
</template>
