<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import { Field, FieldDescription } from '../components/ui/field'
import { Fieldset, FieldsetLegend } from '../components/ui/fieldset'
import { Form } from '../components/ui/form'
import { Slider, SliderValue } from '../components/ui/slider'

const loading = shallowRef(false)
const value = shallowRef<number | number[]>([25, 75])

async function onSubmit(event: SubmitEvent) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget as HTMLFormElement)
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  loading.value = false
  // eslint-disable-next-line no-alert
  alert(`Volume: ${formData.getAll('volume').join(', ')}`)
}
</script>

<template>
  <Form class="flex w-full max-w-64 flex-col gap-4" @submit="onSubmit">
    <Fieldset class="flex w-full flex-col items-stretch gap-3">
      <Field>
        <Slider
          v-model:value="value"
          :get-aria-label="(index: number) => index === 0 ? 'Minimum volume' : 'Maximum volume'"
          name="volume"
        >
          <div class="mb-2 flex items-center justify-between gap-1">
            <FieldsetLegend>Volume</FieldsetLegend>
            <SliderValue />
          </div>
        </Slider>
        <FieldDescription>Choose a value between 0 and 100</FieldDescription>
      </Field>
    </Fieldset>
    <Button :loading="loading" type="submit">
      Submit
    </Button>
  </Form>
</template>
