<script setup lang="ts">
import { BoldIcon, ItalicIcon, UnderlineIcon } from '@lucide/vue'
import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group'
import {
  Tooltip,
  TooltipCreateHandle,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from '../components/ui/tooltip'

const tooltipHandle = TooltipCreateHandle<string>()

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
  <TooltipProvider>
    <ToggleGroup :default-value="['bold']" multiple>
      <TooltipTrigger
        v-for="item in items"
        :key="item.value"
        :as="ToggleGroupItem"
        :aria-label="item.label"
        class="after:absolute after:left-full after:h-full after:w-1"
        :handle="tooltipHandle"
        :payload="item.hint"
        :value="item.value"
      >
        <component :is="item.icon" aria-hidden="true" />
      </TooltipTrigger>
    </ToggleGroup>

    <Tooltip v-slot="{ payload }" :handle="tooltipHandle">
      <TooltipPopup>
        <span>{{ payload }}</span>
      </TooltipPopup>
    </Tooltip>
  </TooltipProvider>
</template>
