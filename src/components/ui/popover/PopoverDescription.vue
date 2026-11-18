<script setup lang="ts">
import type { PopoverDescriptionProps } from '@vase-ui/vue/popover'
import type { HTMLAttributes } from 'vue'
import { Popover as PopoverPrimitive } from '@vase-ui/vue/popover'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ PopoverDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <PopoverPrimitive.Description
    data-slot="popover-description"
    :class="cn('text-muted-foreground text-sm', props.class)"
  >
    <slot />
  </PopoverPrimitive.Description>
</template>
