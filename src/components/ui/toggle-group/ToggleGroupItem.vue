<script setup lang="ts">
import type { ToggleVariants } from '../toggle'
import { computed, inject } from 'vue'
import { Toggle } from '../toggle'
import { ToggleGroupContext } from './context'

type ToggleProps = InstanceType<typeof Toggle>['$props']

interface Props extends /* @vue-ignore */ ToggleProps {
  variant?: ToggleVariants['variant']
  size?: ToggleVariants['size']
}

const props = defineProps<Props>()

const context = inject(ToggleGroupContext, { size: 'default', variant: 'default' } as const)

// As in coss ui, the group wins over the item.
const resolvedVariant = computed(() => context.variant || props.variant)
const resolvedSize = computed(() => context.size || props.size)
</script>

<template>
  <Toggle
    :data-size="resolvedSize"
    :data-variant="resolvedVariant"
    :size="resolvedSize"
    :variant="resolvedVariant"
  >
    <slot />
  </Toggle>
</template>
