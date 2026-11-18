<script lang="ts">
import type { ButtonHTMLAttributes, Component, HTMLAttributes } from 'vue'
import type { ButtonVariants } from './variants'
</script>

<script setup lang="ts">
import { cn } from '../../../lib/utils'
import { Spinner } from '../spinner'
import { buttonVariants } from './variants'

export interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  as?: string | Component
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  loading?: boolean
  disabled?: boolean
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<ButtonProps>(), { as: 'button' })
</script>

<template>
  <!-- $attrs last: a part that renders as this button (`:as="Button"`) keeps its own data-slot. -->
  <component
    :is="props.as"
    data-slot="button"
    :class="cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)"
    :disabled="props.loading || props.disabled"
    :aria-disabled="props.loading || undefined"
    :data-loading="props.loading ? '' : undefined"
    v-bind="$attrs"
  >
    <slot />
    <Spinner
      v-if="props.loading"
      class="pointer-events-none absolute"
      data-slot="button-loading-indicator"
    />
  </component>
</template>
