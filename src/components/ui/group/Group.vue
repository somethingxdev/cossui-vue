<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { GroupVariants } from './variants'
import { cn } from '../../../lib/utils'
import { groupVariants } from './variants'

const props = defineProps<{
  orientation?: GroupVariants['orientation']
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :data-orientation="props.orientation"
    data-slot="group"
    role="group"
    :class="cn(groupVariants({ orientation: props.orientation }), props.class)"
  >
    <slot />
  </div>
</template>
