<script setup lang="ts">
import { SearchIcon } from '@lucide/vue'
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from '../components/ui/combobox'

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
    <ComboboxInput aria-label="Search items" placeholder="Search items…">
      <template #start-addon>
        <SearchIcon />
      </template>
    </ComboboxInput>
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
</template>
