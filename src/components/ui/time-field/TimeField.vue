<script setup lang="ts">
import type { TimeFieldRootProps } from '@vase-ui/vue/time-field'
import type { HTMLAttributes } from 'vue'
import type { DateFieldVariants } from '../date-field'
import { TimeField as TimeFieldPrimitive } from '@vase-ui/vue/time-field'
import { cn } from '../../../lib/utils'
import { dateFieldControlClassName } from '../date-field'
import TimeFieldInput from './TimeFieldInput.vue'

export interface TimeFieldProps extends /* @vue-ignore */ TimeFieldRootProps {
  size?: DateFieldVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<TimeFieldProps>(), {
  size: 'default',
})
</script>

<template>
  <TimeFieldPrimitive.Root
    data-slot="time-field"
    :data-size="props.size"
    :class="cn(dateFieldControlClassName, props.class)"
  >
    <TimeFieldInput :size="props.size" />
    <slot />
  </TimeFieldPrimitive.Root>
</template>
