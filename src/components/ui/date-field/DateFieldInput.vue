<script setup lang="ts">
import type { DateFieldInputProps } from '@vase-ui/vue/date-field'
import type { HTMLAttributes } from 'vue'
import type { DateFieldVariants } from './variants'
import { DateField as DateFieldPrimitive } from '@vase-ui/vue/date-field'
import { cn } from '../../../lib/utils'
import { dateFieldInputVariants, dateFieldLiteralClassName, dateFieldSegmentClassName } from './variants'

interface Props extends /* @vue-ignore */ DateFieldInputProps {
  size?: DateFieldVariants['size']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DateFieldPrimitive.Input
    data-slot="date-field-input"
    :class="cn(dateFieldInputVariants({ size: props.size }), props.class)"
  >
    <template #segment="{ segment }">
      <DateFieldPrimitive.Segment
        v-if="segment.editable"
        :segment="segment"
        data-slot="date-field-segment"
        :class="dateFieldSegmentClassName"
      />
      <DateFieldPrimitive.Literal
        v-else
        :segment="segment"
        data-slot="date-field-literal"
        :class="dateFieldLiteralClassName"
      />
    </template>
  </DateFieldPrimitive.Input>
</template>
