<script setup lang="ts">
import type { Component, HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

interface Props {
  as?: string | Component
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), { as: 'div' })
</script>

<template>
  <component
    :is="props.as"
    role="status"
    data-slot="composer-status"
    :class="cn('px-3 py-2 font-medium text-muted-foreground text-xs empty:m-0 empty:p-0', props.class)"
  >
    <slot />
  </component>
</template>
