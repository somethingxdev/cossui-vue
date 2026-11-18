<script setup lang="ts">
import type { ComboboxChipProps, ComboboxChipRemoveProps } from '@vase-ui/vue/combobox'
import type { HTMLAttributes } from 'vue'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { cn } from '../../../lib/utils'
import ComboboxChipRemove from './ComboboxChipRemove.vue'

interface Props extends /* @vue-ignore */ ComboboxChipProps {
  removeProps?: ComboboxChipRemoveProps
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.Chip
    data-slot="combobox-chip"
    :class="cn(
      `flex items-center rounded-[calc(var(--radius-md)-1px)] bg-accent ps-2 font-medium text-accent-foreground text-sm outline-none sm:text-xs/(--text-xs--line-height) [&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-3.5`,
      props.class,
    )"
  >
    <slot />
    <ComboboxChipRemove v-bind="props.removeProps" />
  </ComboboxPrimitive.Chip>
</template>
