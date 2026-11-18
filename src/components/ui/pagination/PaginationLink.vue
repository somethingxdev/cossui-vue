<script setup lang="ts">
import type { AnchorHTMLAttributes, Component, HTMLAttributes } from 'vue'
import type { ButtonVariants } from '../button'
import { cn } from '../../../lib/utils'
import { buttonVariants } from '../button'

export interface PaginationLinkProps extends /* @vue-ignore */ AnchorHTMLAttributes {
  as?: string | Component
  isActive?: boolean
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<PaginationLinkProps>(), { size: 'icon' })
</script>

<template>
  <!-- As in coss ui, a custom element (`as`) brings its own styles. -->
  <component
    :is="props.as ?? 'a'"
    :aria-current="props.isActive ? 'page' : undefined"
    :data-active="props.isActive || undefined"
    data-slot="pagination-link"
    :class="props.as
      ? props.class
      : cn(buttonVariants({ size: props.size, variant: props.isActive ? 'outline' : 'ghost' }), props.class)"
  >
    <slot />
  </component>
</template>
