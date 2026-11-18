<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import { Checkbox } from '../components/ui/checkbox'
import { Field, FieldLabel } from '../components/ui/field'
import { Form } from '../components/ui/form'

const loading = shallowRef(false)
const result = shallowRef('')

async function onSubmit(event: SubmitEvent) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget as HTMLFormElement)
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  loading.value = false
  result.value = `Terms: ${String(formData.get('terms'))}`
}
</script>

<template>
  <Form class="flex w-auto flex-col gap-4" @submit="onSubmit">
    <Field name="terms">
      <FieldLabel>
        <Checkbox default-checked value="yes" />
        Accept terms and conditions
      </FieldLabel>
    </Field>
    <Button :loading="loading" type="submit">
      Submit
    </Button>
    <p v-if="result" class="text-muted-foreground text-xs">
      {{ result }}
    </p>
  </Form>
</template>
