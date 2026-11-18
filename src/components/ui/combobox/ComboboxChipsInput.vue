<script setup lang="ts">
import type { ComboboxInputProps } from '@vase-ui/vue/combobox'
import type { HTMLAttributes } from 'vue'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ Omit<ComboboxInputProps, 'size'> {
  size?: 'sm' | 'default' | 'lg' | number
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})
</script>

<template>
  <ComboboxPrimitive.Input
    data-slot="combobox-chips-input"
    :data-size="typeof props.size === 'string' ? props.size : undefined"
    :size="typeof props.size === 'number' ? props.size : undefined"
    :class="cn(
      'min-w-12 flex-1 text-base text-foreground outline-none sm:text-sm [[data-slot=combobox-chip]+&]:ps-0.5',
      props.size === 'sm' ? 'ps-1.5' : 'ps-2',
      props.class,
    )"
  />
</template>
