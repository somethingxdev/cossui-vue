<script setup lang="ts">
import { CableIcon } from '@lucide/vue'
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
  <Select default-value="next" :items="items">
    <SelectTrigger aria-label="Select framework with icon">
      <CableIcon aria-hidden="true" />
      <SelectValue />
    </SelectTrigger>
    <SelectPopup :align-item-with-trigger="false">
      <SelectItem v-for="{ label, value } in items" :key="value" :value="value">
        {{ label }}
      </SelectItem>
    </SelectPopup>
  </Select>
</template>
