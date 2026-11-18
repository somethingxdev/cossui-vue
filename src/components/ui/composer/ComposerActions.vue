<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <div
    data-slot="composer-actions"
    :class="cn(
      'in-data-[layout=adaptive]:col-span-full in-data-[layout=adaptive]:row-start-2 mx-[calc(--spacing(2)-1px)] flex in-[[data-layout=adaptive]:not([data-multiline])]:contents shrink-0 items-center justify-between gap-2',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
