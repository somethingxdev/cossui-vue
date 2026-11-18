<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ChevronRight } from '@lucide/vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <li
    aria-hidden="true"
    data-slot="breadcrumb-separator"
    role="presentation"
    :class="cn('opacity-80 [&>svg]:size-4', props.class)"
  >
    <slot>
      <ChevronRight />
    </slot>
  </li>
</template>
