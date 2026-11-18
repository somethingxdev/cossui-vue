<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { MoreHorizontalIcon } from '@lucide/vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span
    aria-hidden="true"
    data-slot="pagination-ellipsis"
    :class="cn('flex min-w-7 justify-center', props.class)"
  >
    <MoreHorizontalIcon class="size-5 sm:size-4" />
    <span class="sr-only">More pages</span>
  </span>
</template>
