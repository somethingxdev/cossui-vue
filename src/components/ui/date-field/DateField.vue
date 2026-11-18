<script setup lang="ts">
import type { DateFieldRootProps } from '@vase-ui/vue/date-field'
import type { HTMLAttributes } from 'vue'
import type { DateFieldVariants } from './variants'
import { DateField as DateFieldPrimitive } from '@vase-ui/vue/date-field'
import { cn } from '../../../lib/utils'
import DateFieldInput from './DateFieldInput.vue'
import { dateFieldControlClassName } from './variants'

export interface DateFieldProps extends /* @vue-ignore */ DateFieldRootProps {
  size?: DateFieldVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<DateFieldProps>(), {
  size: 'default',
})
</script>

<template>
  <DateFieldPrimitive.Root
    data-slot="date-field"
    :data-size="props.size"
    :class="cn(dateFieldControlClassName, props.class)"
  >
    <DateFieldInput :size="props.size" />
    <slot />
  </DateFieldPrimitive.Root>
</template>
