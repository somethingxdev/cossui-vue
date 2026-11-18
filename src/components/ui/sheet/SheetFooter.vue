<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = withDefaults(defineProps<{
  variant?: 'default' | 'bare'
  class?: HTMLAttributes['class']
}>(), {
  variant: 'default',
})
</script>

<template>
  <div
    data-slot="sheet-footer"
    :class="cn(
      'flex flex-col-reverse gap-2 px-6 sm:flex-row sm:justify-end',
      props.variant === 'default' && 'border-t bg-muted/72 py-4',
      props.variant === 'bare' && 'in-[[data-slot=dialog-content]:has([data-slot=sheet-panel])]:pt-3 pt-4 pb-6',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
