<script setup lang="ts">
import type { DrawerSwipeAreaProps } from '@vase-ui/vue/drawer'
import type { HTMLAttributes } from 'vue'
import type { DrawerPosition } from './context'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'
import { cn } from '../../../lib/utils'
import { useDrawerPosition } from './context'

interface Props extends /* @vue-ignore */ DrawerSwipeAreaProps {
  position?: DrawerPosition
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const position = useDrawerPosition(() => props.position)
</script>

<template>
  <DrawerPrimitive.SwipeArea
    data-slot="drawer-swipe-area"
    :class="cn(
      'fixed z-50 touch-none',
      position === 'bottom' && 'inset-x-0 bottom-0 h-8',
      position === 'top' && 'inset-x-0 top-0 h-8',
      position === 'left' && 'inset-y-0 left-0 w-8',
      position === 'right' && 'inset-y-0 right-0 w-8',
      props.class,
    )"
  >
    <slot />
  </DrawerPrimitive.SwipeArea>
</template>
