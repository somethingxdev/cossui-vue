<script setup lang="ts">
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
import { Field, FieldDescription, FieldLabel } from '../components/ui/field'

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
</script>

<template>
  <Field>
    <FieldLabel>Fruits</FieldLabel>
    <Combobox :default-value="[items[0], items[4]]" :items="items" multiple>
      <ComboboxChips>
        <ComboboxValue v-slot="{ value }">
          <ComboboxChip v-for="item in value" :key="item.value" :aria-label="item.label">
            {{ item.label }}
          </ComboboxChip>
          <ComboboxChipsInput
            aria-label="Select items"
            :placeholder="value.length > 0 ? undefined : 'Select items…'"
          />
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxPopup>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          <template #item="{ item }">
            <ComboboxItem :key="item.value" :value="item">
              {{ item.label }}
            </ComboboxItem>
          </template>
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
    <FieldDescription>Select multiple items.</FieldDescription>
  </Field>
</template>
