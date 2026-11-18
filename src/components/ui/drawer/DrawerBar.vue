<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { DrawerPosition } from './context'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'
import { useDrawerPosition } from './context'

const props = defineProps<{
  position?: DrawerPosition
  class?: HTMLAttributes['class']
}>()

const position = useDrawerPosition(() => props.position)
const horizontal = computed(() => position.value === 'left' || position.value === 'right')
</script>

<template>
  <div
    aria-hidden="true"
    data-slot="drawer-bar"
    :class="cn(
      'absolute flex items-center justify-center p-3 before:rounded-full before:bg-input',
      horizontal ? 'inset-y-0 before:h-12 before:w-1' : 'inset-x-0 before:h-1 before:w-12',
      position === 'top' && 'bottom-0',
      position === 'bottom' && 'top-0',
      position === 'left' && 'right-0',
      position === 'right' && 'left-0',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
