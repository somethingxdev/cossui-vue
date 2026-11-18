<script setup lang="ts">
import type { ComboboxChipRemoveProps } from '@vase-ui/vue/combobox'
import type { HTMLAttributes } from 'vue'
import { XIcon } from '@lucide/vue'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ComboboxChipRemoveProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.ChipRemove
    data-slot="combobox-chip-remove"
    :class="cn(
      `h-full shrink-0 cursor-pointer px-1.5 opacity-80 hover:opacity-100 [&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-3.5`,
      props.class,
    )"
  >
    <XIcon />
  </ComboboxPrimitive.ChipRemove>
</template>
