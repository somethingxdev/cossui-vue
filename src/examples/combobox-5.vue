<script setup lang="ts">
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from '../components/ui/combobox'
import { Label } from '../components/ui/label'

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
  <Combobox :items="items">
    <div class="flex flex-col items-start gap-2">
      <Label for="combobox-5-fruits">Fruits</Label>
      <ComboboxInput id="combobox-5-fruits" placeholder="Select an item..." />
    </div>
    <ComboboxPopup>
      <ComboboxEmpty>No results found.</ComboboxEmpty>
      <ComboboxList>
        <template #item="{ item }">
          <ComboboxItem :key="item.value" :value="item.value">
            {{ item.label }}
          </ComboboxItem>
        </template>
      </ComboboxList>
    </ComboboxPopup>
  </Combobox>
</template>
