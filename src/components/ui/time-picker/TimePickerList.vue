<script setup lang="ts">
import type { TimePickerListProps } from '@vase-ui/vue/time-picker'
import type { HTMLAttributes } from 'vue'
import { TimePicker as TimePickerPrimitive } from '@vase-ui/vue/time-picker'
import { cn } from '../../../lib/utils'
import { timePickerItemClassName, timePickerListClassName } from './variants'

interface Props extends /* @vue-ignore */ TimePickerListProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <TimePickerPrimitive.List
    data-slot="time-picker-list"
    :class="cn(timePickerListClassName, 'min-w-28', props.class)"
  >
    <template #item="{ time }">
      <TimePickerPrimitive.Item :time="time" data-slot="time-picker-item" :class="timePickerItemClassName" />
    </template>
  </TimePickerPrimitive.List>
</template>
