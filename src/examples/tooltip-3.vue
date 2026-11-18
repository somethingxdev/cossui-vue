<script setup lang="ts">
import { BoldIcon, ItalicIcon, UnderlineIcon } from '@lucide/vue'
import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group'
import {
  createTooltipController,
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from '../components/ui/tooltip'

const tooltipHandle = createTooltipController<string>()

const items = [
  {
    value: 'bold',
    label: 'Toggle bold',
    hint: 'Make text bold',
    icon: BoldIcon,
  },
  {
    value: 'italic',
    label: 'Toggle italic',
    hint: 'Apply italic formatting to text',
    icon: ItalicIcon,
  },
  {
    value: 'underline',
    label: 'Toggle underline',
    hint: 'Underline text',
    icon: UnderlineIcon,
  },
]
</script>

<template>
  <ToggleGroup :default-value="['bold']" multiple>
    <TooltipTrigger
      v-for="item in items"
      :key="item.value"
      :as="ToggleGroupItem"
      :aria-label="item.label"
      class="after:absolute after:left-full after:h-full after:w-1"
      :controller="tooltipHandle"
      :payload="item.hint"
      :value="item.value"
    >
      <component :is="item.icon" aria-hidden="true" />
    </TooltipTrigger>
  </ToggleGroup>

  <Tooltip :controller="tooltipHandle">
    <TooltipPopup v-slot="{ state }">
      <span>{{ state.payload }}</span>
    </TooltipPopup>
  </Tooltip>
</template>
