<script setup lang="ts">
import { SearchIcon } from '@lucide/vue'
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxTrigger,
  ComboboxValue,
} from '../components/ui/combobox'
import { SelectButton } from '../components/ui/select'

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
    <ComboboxTrigger :as="SelectButton">
      <ComboboxValue placeholder="Select a fruit" />
    </ComboboxTrigger>
    <ComboboxPopup aria-label="Select a fruit">
      <div class="border-b p-2">
        <ComboboxInput
          class="rounded-md before:rounded-[calc(var(--radius-md)-1px)]"
          placeholder="Search fruits..."
          :show-trigger="false"
        >
          <template #start-addon>
            <SearchIcon />
          </template>
        </ComboboxInput>
      </div>
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
