<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxValue,
} from '../components/ui/combobox'
import { Field, FieldError, FieldLabel } from '../components/ui/field'
import { Form } from '../components/ui/form'

interface Fruit { label: string, value: string }

const items: Fruit[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grape', value: 'grape' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Mango', value: 'mango' },
  { label: 'Pineapple', value: 'pineapple' },
  { label: 'Kiwi', value: 'kiwi' },
  { label: 'Peach', value: 'peach' },
  { label: 'Pear', value: 'pear' },
]

const loading = shallowRef(false)

async function onSubmit(event: SubmitEvent) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget as HTMLFormElement)
  const selectedItems = formData.getAll('items')
  const itemValues = selectedItems.map(
    selectedItem => items.find(item => item.label === selectedItem)?.value || selectedItem,
  )
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  loading.value = false
  // eslint-disable-next-line no-alert
  alert(`Favorite items: ${itemValues.join(', ') || ''}`)
}
</script>

<template>
  <Form class="flex w-full max-w-64 flex-col gap-4" @submit="onSubmit">
    <Field name="items">
      <FieldLabel>Favorite items</FieldLabel>
      <Combobox :items="items" multiple required>
        <ComboboxChips>
          <ComboboxValue v-slot="{ value }: { value: string[] }">
            <ComboboxChip v-for="item in value" :key="item" :value="item" />
            <ComboboxChipsInput :placeholder="value.length > 0 ? undefined : 'Select items…'" />
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxPopup>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            <template #item="{ item }">
              <ComboboxItem :key="item.value" :value="item.value">
                {{ item.label }}
              </ComboboxItem>
            </template>
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
      <FieldError>Please select at least one item.</FieldError>
    </Field>
    <Button :loading="loading" type="submit">
      Submit
    </Button>
  </Form>
</template>
