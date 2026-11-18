<script setup lang="ts">
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const items = [
  { label: 'Next.js', value: 'next' },
  { label: 'Vite', value: 'vite' },
  { label: 'Astro', value: 'astro' },
]
</script>

<template>
  <Select :items="items">
    <SelectTrigger aria-label="Select framework">
      <SelectValue placeholder="Select framework" />
    </SelectTrigger>
    <SelectPopup :align-item-with-trigger="false">
      <SelectItem v-for="{ label, value } in items" :key="value" :value="value">
        {{ label }}
      </SelectItem>
    </SelectPopup>
  </Select>
</template>
