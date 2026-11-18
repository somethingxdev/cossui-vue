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
  <Select default-value="apple" :items="items">
    <SelectLabel>Fruits</SelectLabel>
    <SelectTrigger>
      <SelectValue />
    </SelectTrigger>
    <SelectPopup>
      <SelectItem v-for="item in items" :key="item.value" :value="item.value">
        {{ item.label }}
      </SelectItem>
    </SelectPopup>
  </Select>
</template>
