<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="dialog-header"
    :class="cn(
      'flex flex-col gap-2 p-6 in-[[data-slot=dialog-content]:has([data-slot=dialog-panel])]:pb-3 max-sm:pb-4',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
