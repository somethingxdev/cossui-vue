<script setup lang="ts">
import { Code2Icon, GlobeIcon, LayersIcon, ZapIcon } from '@lucide/vue'
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const items = [
  { icon: LayersIcon, label: 'Components', value: 'components' },
  { icon: ZapIcon, label: 'Performance', value: 'performance' },
  { icon: GlobeIcon, label: 'Network', value: 'network' },
  { icon: Code2Icon, label: 'Development', value: 'development' },
]

type Item = (typeof items)[number]
</script>

<template>
  <Select :default-value="items[0]" :item-to-string-value="(item: Item) => item.value">
    <SelectTrigger aria-label="Select category">
      <SelectValue v-slot="{ value: item }">
        <span class="flex items-center gap-2">
          <component :is="item.icon" />
          <span class="truncate">{{ item.label }}</span>
        </span>
      </SelectValue>
    </SelectTrigger>
    <SelectPopup>
      <SelectItem v-for="item in items" :key="item.value" :value="item">
        <span class="flex items-center gap-2">
          <component :is="item.icon" />
          <span class="truncate">{{ item.label }}</span>
        </span>
      </SelectItem>
    </SelectPopup>
  </Select>
</template>
