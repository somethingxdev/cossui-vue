<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="frame-panel-title"
    :class="cn('font-semibold text-sm', props.class)"
  >
    <slot />
  </div>
</template>
