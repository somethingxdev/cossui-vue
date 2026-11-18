<script setup lang="ts">
import type { PopoverTitleProps } from '@vase-ui/vue/popover'
import type { HTMLAttributes } from 'vue'
import { Popover as PopoverPrimitive } from '@vase-ui/vue/popover'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ PopoverTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <PopoverPrimitive.Title
    data-slot="popover-title"
    :class="cn('font-semibold text-lg leading-none', props.class)"
  >
    <slot />
  </PopoverPrimitive.Title>
</template>
