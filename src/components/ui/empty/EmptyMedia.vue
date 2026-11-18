<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { EmptyMediaVariants } from './variants'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'
import { emptyMediaVariants } from './variants'

const props = withDefaults(defineProps<{
  variant?: EmptyMediaVariants['variant']
  class?: HTMLAttributes['class']
}>(), { variant: 'default' })

// As in coss ui, `class` goes to the wrapper and to each tile.
const tile = computed(() => cn(emptyMediaVariants({ variant: props.variant }), props.class))
</script>

<template>
  <div
    data-slot="empty-media"
    :data-variant="props.variant"
    :class="cn('relative mb-6', props.class)"
  >
    <template v-if="props.variant === 'icon'">
      <div
        aria-hidden="true"
        :class="cn(tile, 'pointer-events-none absolute bottom-px origin-bottom-left -translate-x-0.5 -rotate-10 scale-84 shadow-none')"
      />
      <div
        aria-hidden="true"
        :class="cn(tile, 'pointer-events-none absolute bottom-px origin-bottom-right translate-x-0.5 rotate-10 scale-84 shadow-none')"
      />
    </template>
    <div :class="tile">
      <slot />
    </div>
  </div>
</template>
