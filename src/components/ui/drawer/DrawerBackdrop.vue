<script setup lang="ts">
import type { DrawerBackdropProps } from '@vase-ui/vue/drawer'
import type { HTMLAttributes } from 'vue'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ DrawerBackdropProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DrawerPrimitive.Backdrop
    data-slot="drawer-backdrop"
    :class="cn(
      'fixed inset-0 z-50 bg-black/32 opacity-[calc(1-var(--drawer-swipe-progress))] backdrop-blur-sm transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-swiping:duration-0 supports-[-webkit-touch-callout:none]:absolute',
      props.class,
    )"
  />
</template>
