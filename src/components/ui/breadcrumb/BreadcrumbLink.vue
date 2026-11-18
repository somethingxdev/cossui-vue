<script setup lang="ts">
import type { Component, HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = withDefaults(defineProps<{
  as?: string | Component
  class?: HTMLAttributes['class']
}>(), { as: 'a' })
</script>

<template>
  <component
    :is="props.as"
    data-slot="breadcrumb-link"
    :class="cn('transition-colors hover:text-foreground', props.class)"
  >
    <slot />
  </component>
</template>
