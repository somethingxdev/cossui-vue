<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import { Field } from '../components/ui/field'
import { Form } from '../components/ui/form'
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from '../components/ui/number-field'

const loading = shallowRef(false)

// Stands in for a schema validator such as zod.
function validate(formData: FormData): string | null {
  const quantity = Number(formData.get('quantity'))
  if (Number.isNaN(quantity))
    return 'Please enter a quantity.'
  if (quantity < 1)
    return 'Quantity must be at least 1.'
  if (quantity > 100)
    return 'Maximum quantity is 100.'
  return null
}

async function onSubmit(event: SubmitEvent) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget as HTMLFormElement)
  loading.value = true
  const error = validate(formData)
  await new Promise(resolve => setTimeout(resolve, 800))
  loading.value = false
  if (!error) {
    // eslint-disable-next-line no-alert
    alert(`Quantity: ${String(formData.get('quantity'))}`)
  }
}
</script>

<template>
  <Form class="flex w-full max-w-64 flex-col gap-4" @submit="onSubmit">
    <Field name="quantity">
      <NumberField :default-value="1" :max="100" :min="1">
        <NumberFieldScrubArea label="Quantity" />
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </Field>

    <Button :loading="loading" type="submit">
      Submit
    </Button>
  </Form>
</template>
