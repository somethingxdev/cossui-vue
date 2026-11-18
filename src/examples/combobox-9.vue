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
  <Combobox :default-value="['apple', 'strawberry']" :items="items" multiple>
    <ComboboxChips>
      <ComboboxValue v-slot="{ value }: { value: string[] }">
        <ComboboxChip v-for="item in value" :key="item" :value="item" />
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
          <ComboboxItem :key="item.value" :value="item.value">
            {{ item.label }}
          </ComboboxItem>
        </template>
      </ComboboxList>
    </ComboboxPopup>
  </Combobox>
</template>
