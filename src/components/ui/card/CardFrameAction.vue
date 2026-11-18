<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="card-frame-action"
    :class="cn('col-start-2 nth-3:row-span-2 nth-3:row-start-1 inline-flex self-center justify-self-end', props.class)"
  >
    <slot />
  </div>
</template>
