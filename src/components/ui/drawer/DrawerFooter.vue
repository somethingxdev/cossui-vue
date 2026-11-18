<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { cn } from '../../../lib/utils'

const props = withDefaults(defineProps<{
  variant?: 'default' | 'bare'
  allowSelection?: boolean
  class?: HTMLAttributes['class']
}>(), {
  variant: 'default',
  allowSelection: true,
})

// A mouse drag that starts here selects text instead of moving the drawer; touch still swipes it.
const finePointer = useMediaQuery('(pointer: fine)')
</script>

<template>
  <div
    :data-drawer-no-drag="props.allowSelection && finePointer ? '' : undefined"
    data-slot="drawer-footer"
    :class="cn(
      'flex flex-col-reverse gap-2 px-6 pb-(--safe-area-inset-bottom,0px) sm:flex-row sm:justify-end',
      !props.allowSelection && 'cursor-default',
      props.variant === 'default' && 'border-t bg-muted/72 pt-4 pb-[calc(env(safe-area-inset-bottom,0px)+--spacing(4))]',
      props.variant === 'bare' && 'in-[[data-slot=drawer-content]:has([data-slot=drawer-panel])]:pt-3 pt-4 pb-[calc(env(safe-area-inset-bottom,0px)+--spacing(6))]',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
