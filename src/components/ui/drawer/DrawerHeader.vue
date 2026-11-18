<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  allowSelection?: boolean
  class?: HTMLAttributes['class']
}>()

// A mouse drag that starts here selects text instead of moving the drawer; touch still swipes it.
const finePointer = useMediaQuery('(pointer: fine)')
</script>

<template>
  <div
    :data-drawer-no-drag="props.allowSelection && finePointer ? '' : undefined"
    data-slot="drawer-header"
    :class="cn(
      'flex flex-col gap-2 p-6 in-[[data-slot=drawer-content]:has([data-slot=drawer-panel])]:pb-3 max-sm:pb-4',
      !props.allowSelection && 'cursor-default',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
