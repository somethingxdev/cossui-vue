<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ToggleVariants } from './variants'
import * as TogglePrimitive from '@ui-sdk/vue/toggle'
import { cn } from '../../../lib/utils'
import { toggleVariants } from './variants'

type ToggleProps = InstanceType<typeof TogglePrimitive.Toggle>['$props']

interface Props extends /* @vue-ignore */ ToggleProps {
  variant?: ToggleVariants['variant']
  size?: ToggleVariants['size']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <TogglePrimitive.Toggle :class="cn(toggleVariants({ variant: props.variant, size: props.size }), props.class)">
    <slot />
  </TogglePrimitive.Toggle>
</template>
