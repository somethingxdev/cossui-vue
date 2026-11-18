<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import { Field, FieldItem, FieldLabel } from '../components/ui/field'
import { Fieldset, FieldsetLegend } from '../components/ui/fieldset'
import { Form } from '../components/ui/form'
import { Radio, RadioGroup } from '../components/ui/radio-group'

const loading = shallowRef(false)
const result = shallowRef('')

async function onSubmit(event: SubmitEvent) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget as HTMLFormElement)
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  loading.value = false
  result.value = `Selected: ${String(formData.get('frameworks'))}`
}
</script>

<template>
  <Form class="flex w-full max-w-[160px] flex-col gap-4" @submit="onSubmit">
    <Field :as="Fieldset" class="gap-2" name="frameworks">
      <FieldsetLegend class="font-medium text-sm">
        Frameworks
      </FieldsetLegend>
      <RadioGroup default-value="next">
        <FieldItem>
          <FieldLabel>
            <Radio value="next" /> Next.js
          </FieldLabel>
        </FieldItem>
        <FieldItem>
          <FieldLabel>
            <Radio value="vite" /> Vite
          </FieldLabel>
        </FieldItem>
        <FieldItem>
          <FieldLabel>
            <Radio value="astro" /> Astro
          </FieldLabel>
        </FieldItem>
      </RadioGroup>
    </Field>
    <Button :loading="loading" type="submit">
      Submit
    </Button>
    <p v-if="result" class="text-muted-foreground text-xs">
      {{ result }}
    </p>
  </Form>
</template>
