<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'
import { cn } from '../../../lib/utils'

const props = withDefaults(defineProps<{
  variant?: 'default' | 'bare'
  allowSelection?: boolean
  class?: HTMLAttributes['class']
}>(), {
  variant: 'default',
  allowSelection: true,
})
</script>

<template>
  <component
    :is="props.allowSelection ? DrawerPrimitive.Content : 'div'"
    data-slot="drawer-footer"
    :class="cn(
      'flex flex-col-reverse gap-2 px-6 pb-(--safe-area-inset-bottom,0px) sm:flex-row sm:justify-end',
      !props.allowSelection && 'cursor-default',
      props.variant === 'default' && 'border-t bg-muted/72 pt-4 pb-[calc(env(safe-area-inset-bottom,0px)+--spacing(4))]',
      props.variant === 'bare' && 'in-[[data-slot=drawer-popup]:has([data-slot=drawer-panel])]:pt-3 pt-4 pb-[calc(env(safe-area-inset-bottom,0px)+--spacing(6))]',
      props.class,
    )"
  >
    <slot />
  </component>
</template>
