<script setup lang="ts">
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const items = [
  { description: 'npx create-next-app', label: 'Next.js', value: 'next' },
  { description: 'npm create vite@latest', label: 'Vite', value: 'vite' },
  { description: 'npm create astro@latest', label: 'Astro', value: 'astro' },
  { description: 'npx create-remix', label: 'Remix', value: 'remix' },
]

type Item = (typeof items)[number]
</script>

<template>
  <Select :default-value="items[0]" :item-to-string-value="(item: Item) => item.value">
    <SelectTrigger aria-label="Select framework with command" class="py-1">
      <SelectValue v-slot="{ value: item }">
        <span class="flex flex-col">
          <span class="truncate">{{ item.label }}</span>
          <span class="truncate text-muted-foreground text-xs">
            {{ item.description }}
          </span>
        </span>
      </SelectValue>
    </SelectTrigger>
    <SelectPopup>
      <SelectItem v-for="item in items" :key="item.value" :value="item">
        <span class="flex flex-col">
          <span class="truncate">{{ item.label }}</span>
          <span class="truncate text-muted-foreground text-xs">
            {{ item.description }}
          </span>
        </span>
      </SelectItem>
    </SelectPopup>
  </Select>
</template>
