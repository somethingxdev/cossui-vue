<script setup lang="ts">
import type { TimeFieldInputProps } from '@vase-ui/vue/time-field'
import type { HTMLAttributes } from 'vue'
import type { DateFieldVariants } from '../date-field'
import { TimeField as TimeFieldPrimitive } from '@vase-ui/vue/time-field'
import { cn } from '../../../lib/utils'
import { dateFieldInputVariants, dateFieldLiteralClassName, dateFieldSegmentClassName } from '../date-field'

interface Props extends /* @vue-ignore */ TimeFieldInputProps {
  size?: DateFieldVariants['size']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <TimeFieldPrimitive.Input
    data-slot="time-field-input"
    :class="cn(dateFieldInputVariants({ size: props.size }), props.class)"
  >
    <template #segment="{ segment }">
      <TimeFieldPrimitive.Segment
        v-if="segment.editable"
        :segment="segment"
        data-slot="time-field-segment"
        :class="dateFieldSegmentClassName"
      />
      <TimeFieldPrimitive.Literal
        v-else
        :segment="segment"
        data-slot="time-field-literal"
        :class="dateFieldLiteralClassName"
      />
    </template>
  </TimeFieldPrimitive.Input>
</template>
