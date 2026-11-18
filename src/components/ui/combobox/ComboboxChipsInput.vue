<script setup lang="ts">
import type { HTMLAttributes, InputHTMLAttributes } from 'vue'
import * as ComboboxPrimitive from '@ui-sdk/vue/combobox'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ Omit<InputHTMLAttributes, 'size'> {
  size?: 'sm' | 'default' | 'lg' | number
  class?: HTMLAttributes['class']
}

// No `withDefaults`: over the input's attributes it is too complex for TypeScript, and only `sm` and `lg` are styled.
const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.ComboboxInput
    :data-size="typeof props.size === 'string' ? props.size : undefined"
    :size="typeof props.size === 'number' ? props.size : undefined"
    :class="cn(
      'min-w-12 flex-1 text-base text-foreground outline-none sm:text-sm [[data-slot=combobox-chip]+&]:ps-0.5',
      props.size === 'sm' ? 'ps-1.5' : 'ps-2',
      props.class,
    )"
  />
</template>
