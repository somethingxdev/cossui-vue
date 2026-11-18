<script setup lang="ts">
import type { ToggleProps } from '@vase-ui/vue/toggle'
import type { HTMLAttributes } from 'vue'
import type { ToggleVariants } from './variants'
import { Toggle as TogglePrimitive } from '@vase-ui/vue/toggle'
import { cn } from '../../../lib/utils'
import { toggleVariants } from './variants'

interface Props extends /* @vue-ignore */ ToggleProps {
  variant?: ToggleVariants['variant']
  size?: ToggleVariants['size']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <TogglePrimitive
    data-slot="toggle"
    :class="cn(toggleVariants({ variant: props.variant, size: props.size }), props.class)"
  >
    <slot />
  </TogglePrimitive>
</template>
