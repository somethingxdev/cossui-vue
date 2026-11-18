<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '../components/ui/field'
import { Form } from '../components/ui/form'
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const items = [
  { label: 'Next.js', value: 'next' },
  { label: 'Vite', value: 'vite' },
  { label: 'Astro', value: 'astro' },
]

const loading = shallowRef(false)

async function onSubmit(event: SubmitEvent) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget as HTMLFormElement)
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  loading.value = false
  // eslint-disable-next-line no-alert
  alert(`Framework: ${formData.get('framework') || ''}`)
}
</script>

<template>
  <Form class="flex w-full max-w-64 flex-col gap-4" @submit="onSubmit">
    <Field>
      <FieldLabel>Framework</FieldLabel>
      <Select :items="items" name="framework" required>
        <SelectTrigger>
          <SelectValue placeholder="Select a framework" />
        </SelectTrigger>
        <SelectPopup>
          <SelectItem v-for="{ label, value } in items" :key="value" :value="value">
            {{ label }}
          </SelectItem>
        </SelectPopup>
      </Select>
      <FieldDescription>Pick your favorite.</FieldDescription>
      <FieldError>Please select a value.</FieldError>
    </Field>

    <Button :loading="loading" type="submit">
      Submit
    </Button>
  </Form>
</template>
