<script setup lang="ts">
import type { SelectGroupLabelProps } from '@vase-ui/vue/select'
import type { HTMLAttributes } from 'vue'
import { Select as SelectPrimitive } from '@vase-ui/vue/select'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ SelectGroupLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SelectPrimitive.GroupLabel
    data-slot="select-group-label"
    :class="cn('px-2 py-1.5 font-medium text-muted-foreground text-xs', props.class)"
  >
    <slot />
  </SelectPrimitive.GroupLabel>
</template>
