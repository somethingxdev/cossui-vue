<script setup lang="ts">
import type { DialogViewportProps } from '@vase-ui/vue/dialog'
import type { HTMLAttributes } from 'vue'
import { Dialog as SheetPrimitive } from '@vase-ui/vue/dialog'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ DialogViewportProps {
  side?: 'right' | 'left' | 'top' | 'bottom'
  variant?: 'default' | 'inset'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})
</script>

<template>
  <SheetPrimitive.Viewport
    data-slot="sheet-viewport"
    :class="cn(
      'fixed inset-0 z-50 grid',
      props.side === 'bottom' && 'grid grid-rows-[1fr_auto] pt-12',
      props.side === 'top' && 'grid grid-rows-[auto_1fr] pb-12',
      props.side === 'left' && 'flex justify-start',
      props.side === 'right' && 'flex justify-end',
      props.variant === 'inset' && 'sm:p-4',
      props.class,
    )"
  >
    <slot />
  </SheetPrimitive.Viewport>
</template>
