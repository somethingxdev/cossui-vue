<script setup lang="ts">
import { SearchIcon } from '@lucide/vue'
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
</script>

<template>
  <Combobox :default-value="[items[0], items[3]]" :items="items" multiple>
    <ComboboxChips>
      <template #start-addon>
        <SearchIcon />
      </template>
      <ComboboxValue v-slot="{ value }: { value: Fruit[] }">
        <ComboboxChip v-for="item in value" :key="item.value" :aria-label="item.label">
          {{ item.label }}
        </ComboboxChip>
        <ComboboxChipsInput
          aria-label="Select a item"
          :placeholder="value.length > 0 ? undefined : 'Select a item...'"
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
</template>
