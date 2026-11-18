<script setup lang="ts">
import type { SelectTriggerProps } from '@vase-ui/vue/select'
import type { HTMLAttributes } from 'vue'
import type { SelectTriggerVariants } from './variants'
import { ChevronsUpDownIcon } from '@lucide/vue'
import { Select as SelectPrimitive } from '@vase-ui/vue/select'
import { cn } from '../../../lib/utils'
import { selectTriggerIconClassName, selectTriggerVariants } from './variants'

interface Props extends /* @vue-ignore */ SelectTriggerProps {
  size?: SelectTriggerVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})
</script>

<template>
  <SelectPrimitive.Trigger
    data-slot="select-trigger"
    :class="cn(selectTriggerVariants({ size: props.size }), props.class)"
  >
    <slot />
    <SelectPrimitive.Icon data-slot="select-icon">
      <ChevronsUpDownIcon :class="selectTriggerIconClassName" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
</template>
