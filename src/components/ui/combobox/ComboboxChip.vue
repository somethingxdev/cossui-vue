<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as ComboboxPrimitive from '@ui-sdk/vue/combobox'
import { cn } from '../../../lib/utils'
import ComboboxChipRemove from './ComboboxChipRemove.vue'

type ComboboxChipProps = InstanceType<typeof ComboboxPrimitive.ComboboxChip>['$props']
type ComboboxChipRemoveProps = InstanceType<typeof ComboboxChipRemove>['$props']

interface Props extends /* @vue-ignore */ Omit<ComboboxChipProps, 'value'> {
  value: unknown
  removeProps?: ComboboxChipRemoveProps
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.ComboboxChip
    v-slot="{ state }"
    :value="props.value"
    :class="cn(
      `flex items-center rounded-[calc(var(--radius-md)-1px)] bg-accent ps-2 font-medium text-accent-foreground text-sm outline-none sm:text-xs/(--text-xs--line-height) [&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-3.5`,
      props.class,
    )"
  >
    <slot>{{ state.label }}</slot>
    <ComboboxChipRemove :aria-label="`Remove ${state.label}`" v-bind="props.removeProps" />
  </ComboboxPrimitive.ComboboxChip>
</template>
