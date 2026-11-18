<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="card-footer"
    :class="cn('flex items-center p-6 in-[[data-slot=card]:has(>[data-slot=card-panel])]:pt-4', props.class)"
  >
    <slot />
  </div>
</template>
