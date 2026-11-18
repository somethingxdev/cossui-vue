<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

interface Props {
  align?: 'start' | 'end'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), { align: 'start' })
</script>

<template>
  <div
    data-slot="composer-action-group"
    :data-align="props.align"
    :class="cn(
      'in-[[data-layout=adaptive]:not([data-multiline])]:row-start-1 flex min-w-0 flex-wrap items-center gap-1',
      props.align === 'start'
        ? 'in-[[data-layout=adaptive]:not([data-multiline])]:col-start-1 in-[[data-layout=adaptive]:not([data-multiline])]:me-2'
        : 'in-[[data-layout=adaptive]:not([data-multiline])]:col-start-3 in-[[data-layout=adaptive]:not([data-multiline])]:ms-2 ms-auto justify-end',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
