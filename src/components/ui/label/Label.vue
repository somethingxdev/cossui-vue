<script setup lang="ts">
import type { HTMLAttributes, LabelHTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ LabelHTMLAttributes {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <label
    data-slot="label"
    :class="cn('inline-flex items-center gap-2 font-medium text-base/4.5 text-foreground sm:text-sm/4', props.class)"
  >
    <slot />
  </label>
</template>
