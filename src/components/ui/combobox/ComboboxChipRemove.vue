<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { XIcon } from '@lucide/vue'
import * as ComboboxPrimitive from '@ui-sdk/vue/combobox'
import { cn } from '../../../lib/utils'

type ComboboxChipRemoveProps = InstanceType<typeof ComboboxPrimitive.ComboboxChipRemove>['$props']

interface Props extends /* @vue-ignore */ ComboboxChipRemoveProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.ComboboxChipRemove
    aria-label="Remove"
    :class="cn(
      `h-full shrink-0 cursor-pointer px-1.5 opacity-80 hover:opacity-100 [&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-3.5`,
      props.class,
    )"
  >
    <XIcon />
  </ComboboxPrimitive.ComboboxChipRemove>
</template>
