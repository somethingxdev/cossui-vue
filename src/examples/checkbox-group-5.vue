<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import { Checkbox } from '../components/ui/checkbox'
import { CheckboxGroup } from '../components/ui/checkbox-group'
import { Field, FieldItem, FieldLabel } from '../components/ui/field'
import { Fieldset, FieldsetLegend } from '../components/ui/fieldset'
import { Form } from '../components/ui/form'

const loading = shallowRef(false)
const result = shallowRef('')

async function onSubmit(event: SubmitEvent) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget as HTMLFormElement)
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  loading.value = false
  result.value = `Selected: ${formData.getAll('frameworks').join(', ') || 'none'}`
}
</script>

<template>
  <Form class="flex w-full max-w-[160px] flex-col gap-4" @submit="onSubmit">
    <Field :as="Fieldset" name="frameworks">
      <FieldsetLegend class="font-medium text-sm">
        Frameworks
      </FieldsetLegend>
      <CheckboxGroup :default-value="['next']">
        <FieldItem>
          <FieldLabel>
            <Checkbox value="next" />
            Next.js
          </FieldLabel>
        </FieldItem>
        <FieldItem>
          <FieldLabel>
            <Checkbox value="vite" />
            Vite
          </FieldLabel>
        </FieldItem>
        <FieldItem>
          <FieldLabel>
            <Checkbox value="astro" />
            Astro
          </FieldLabel>
        </FieldItem>
      </CheckboxGroup>
    </Field>
    <Button :loading="loading" type="submit">
      Submit
    </Button>
    <p v-if="result" class="text-muted-foreground text-xs">
      {{ result }}
    </p>
  </Form>
</template>
