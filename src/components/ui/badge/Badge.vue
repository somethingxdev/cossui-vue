<script lang="ts">
import type { Component, HTMLAttributes } from 'vue'
import type { BadgeVariants } from './variants'
</script>

<script setup lang="ts">
import { cn } from '../../../lib/utils'
import { badgeVariants } from './variants'

export interface BadgeProps extends /* @vue-ignore */ HTMLAttributes {
  as?: string | Component
  variant?: BadgeVariants['variant']
  size?: BadgeVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<BadgeProps>(), { as: 'span' })
</script>

<template>
  <component
    :is="props.as"
    data-slot="badge"
    :class="cn(badgeVariants({ variant: props.variant, size: props.size }), props.class)"
  >
    <slot />
  </component>
</template>
