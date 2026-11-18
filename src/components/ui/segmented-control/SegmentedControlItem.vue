<script setup lang="ts">
import type { Component, HTMLAttributes } from 'vue'
import type { SegmentedControlSize } from './variants'
import { computed, inject } from 'vue'
import { cn } from '../../../lib/utils'
import { SegmentedControlContext } from './context'
import { segmentedControlItemLayoutClassName, segmentedControlItemSizeClassNames } from './variants'

const props = defineProps<{
  as?: string | Component
  size?: SegmentedControlSize
  class?: HTMLAttributes['class']
}>()

const root = inject(SegmentedControlContext, { size: 'default' } as const)
const resolvedSize = computed(() => props.size ?? root.size)
</script>

<template>
  <component
    :is="props.as ?? 'button'"
    :type="props.as ? undefined : 'button'"
    :data-size="resolvedSize"
    data-slot="segmented-control-item"
    :class="cn(
      'relative inline-flex shrink-0 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-md border border-transparent font-medium text-base text-muted-foreground/72 outline-2 outline-transparent transition-[color,outline-color] hover:bg-transparent hover:text-muted-foreground focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-64 data-disabled:pointer-events-none data-disabled:opacity-64 sm:text-sm',
      'data-checked:bg-background data-checked:text-foreground data-checked:shadow-sm/5 dark:data-checked:bg-input',
      'aria-[current=page]:bg-background aria-[current=page]:text-foreground aria-[current=page]:shadow-sm/5 dark:aria-[current=page]:bg-input',
      'data-pressed:bg-background data-pressed:text-foreground data-pressed:shadow-sm/5 dark:data-pressed:bg-input',
      '[:has(>[data-slot=segmented-control-indicator]:not([hidden]))>&]:bg-transparent! [:has(>[data-slot=segmented-control-indicator]:not([hidden]))>&]:shadow-none!',
      segmentedControlItemLayoutClassName,
      segmentedControlItemSizeClassNames[resolvedSize],
      props.class,
    )"
  >
    <slot />
  </component>
</template>
