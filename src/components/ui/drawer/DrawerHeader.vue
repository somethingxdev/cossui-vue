<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  allowSelection?: boolean
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <component
    :is="props.allowSelection ? DrawerPrimitive.Content : 'div'"
    data-slot="drawer-header"
    :class="cn(
      'flex flex-col gap-2 p-6 in-[[data-slot=drawer-popup]:has([data-slot=drawer-panel])]:pb-3 max-sm:pb-4',
      !props.allowSelection && 'cursor-default',
      props.class,
    )"
  >
    <slot />
  </component>
</template>
