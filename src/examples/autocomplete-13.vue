<script setup lang="ts">
import { shallowRef } from 'vue'
import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from '../components/ui/autocomplete'
import { Button } from '../components/ui/button'
import { Field, FieldError, FieldLabel } from '../components/ui/field'
import { Form } from '../components/ui/form'

const items = [
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
  const selectedItem = formData.get('item')
  // The value of an autocomplete is its text (the label), so we need to find the corresponding value
  const itemValue = items.find(item => item.label === selectedItem)?.value || selectedItem
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  loading.value = false
  // eslint-disable-next-line no-alert
  alert(`Favorite item: ${itemValue || ''}`)
}
</script>

<template>
  <Form class="flex w-full max-w-64 flex-col gap-4" @submit="onSubmit">
    <Field name="item">
      <FieldLabel>Favorite item</FieldLabel>
      <Autocomplete :items="items" required>
        <AutocompleteInput placeholder="Search items…" />
        <AutocompletePopup>
          <AutocompleteEmpty>No items found.</AutocompleteEmpty>
          <AutocompleteList>
            <template #item="{ item }">
              <AutocompleteItem :key="item.value" :value="item.value">
                {{ item.label }}
              </AutocompleteItem>
            </template>
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
      <FieldError>Please select a item.</FieldError>
    </Field>
    <Button :loading="loading" type="submit">
      Submit
    </Button>
  </Form>
</template>
