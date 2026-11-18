<script setup lang="ts">
import type { Component, HTMLAttributes } from 'vue'
import type { SegmentedControlSize } from './variants'
import { provide } from 'vue'
import { cn } from '../../../lib/utils'
import { SegmentedControlContext } from './context'
import SegmentedControlIndicator from './SegmentedControlIndicator.vue'

const props = withDefaults(defineProps<{
  as?: string | Component
  size?: SegmentedControlSize
  class?: HTMLAttributes['class']
}>(), { as: 'div', size: 'default' })

provide(SegmentedControlContext, props)
</script>

<template>
  <component
    :is="props.as"
    :data-size="props.size"
    data-slot="segmented-control"
    :class="cn('relative z-0 flex w-fit items-center justify-center gap-0.5 rounded-lg bg-muted p-0.5', props.class)"
  >
    <slot />
    <SegmentedControlIndicator />
  </component>
</template>
