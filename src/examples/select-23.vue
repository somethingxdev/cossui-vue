<script setup lang="ts">
import {
  Select,
  SelectItem,
  SelectLabel,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const items = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
]
</script>

<template>
  <Select aria-label="Select fruit" :default-value="items[0]" :items="items">
    <SelectLabel>Fruits</SelectLabel>
    <SelectTrigger>
      <SelectValue />
    </SelectTrigger>
    <SelectPopup>
      <SelectItem v-for="item in items" :key="item.value" :value="item">
        {{ item.label }}
      </SelectItem>
    </SelectPopup>
  </Select>
</template>
