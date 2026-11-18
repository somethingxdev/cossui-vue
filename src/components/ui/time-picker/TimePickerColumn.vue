<script setup lang="ts">
import type { TimePickerColumnProps } from '@vase-ui/vue/time-picker'
import type { HTMLAttributes } from 'vue'
import { TimePicker as TimePickerPrimitive } from '@vase-ui/vue/time-picker'
import { cn } from '../../../lib/utils'
import { timePickerItemClassName, timePickerListClassName } from './variants'

interface Props extends /* @vue-ignore */ TimePickerColumnProps {
  unit: TimePickerColumnProps['unit']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <TimePickerPrimitive.Column
    data-slot="time-picker-column"
    :unit="props.unit"
    :class="cn(timePickerListClassName, 'w-12', props.class)"
  >
    <template #item="{ value }">
      <TimePickerPrimitive.ColumnItem :value="value" data-slot="time-picker-column-item" :class="timePickerItemClassName" />
    </template>
  </TimePickerPrimitive.Column>
</template>
