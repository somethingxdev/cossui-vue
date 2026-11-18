<script setup lang="ts">
import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from '../components/ui/autocomplete'

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
  <Autocomplete auto-highlight :items="items">
    <AutocompleteInput aria-label="Search items" placeholder="Search items…" />
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
</template>
