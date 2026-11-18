<script setup lang="ts">
import type { DrawerViewportProps } from '@vase-ui/vue/drawer'
import type { HTMLAttributes } from 'vue'
import type { DrawerPosition } from './context'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ DrawerViewportProps {
  position?: DrawerPosition
  variant?: 'default' | 'straight' | 'inset'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})
</script>

<template>
  <DrawerPrimitive.Viewport
    data-slot="drawer-viewport"
    :class="cn(
      'fixed inset-0 z-50 [--bleed:--spacing(12)] [--inset:0px]',
      'touch-none',
      props.position === 'bottom' && 'grid grid-rows-[1fr_auto] pt-[max(--spacing(2),env(safe-area-inset-top,0px))] after:pointer-events-none after:fixed after:inset-x-0 after:bottom-0 after:h-(--bleed) after:bg-popover data-closed:after:opacity-0 has-[[data-swiping]]:after:opacity-0',
      props.position === 'top' && 'grid grid-rows-[auto_1fr] pb-12',
      props.position === 'left' && 'flex justify-start',
      props.position === 'right' && 'flex justify-end',
      props.variant === 'inset' && 'px-(--inset) sm:[--inset:--spacing(4)]',
      props.variant === 'inset' && props.position !== 'bottom' && 'pt-(--inset)',
      props.variant === 'inset' && props.position !== 'top' && 'pb-(--inset)',
      props.variant === 'inset' && props.position === 'bottom' && 'sm:after:hidden',
      props.class,
    )"
  >
    <slot />
  </DrawerPrimitive.Viewport>
</template>
