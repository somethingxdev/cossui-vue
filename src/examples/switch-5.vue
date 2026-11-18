<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import { Field, FieldLabel } from '../components/ui/field'
import { Form } from '../components/ui/form'
import { Switch } from '../components/ui/switch'

const loading = shallowRef(false)
const result = shallowRef('')

async function onSubmit(event: SubmitEvent) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget as HTMLFormElement)
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  loading.value = false
  result.value = `Marketing emails: ${String(formData.get('marketing'))}`
}
</script>

<template>
  <Form class="flex flex-col gap-4" @submit="onSubmit">
    <Field name="marketing">
      <FieldLabel>
        <Switch default-checked name="marketing" />
        Enable marketing emails
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
