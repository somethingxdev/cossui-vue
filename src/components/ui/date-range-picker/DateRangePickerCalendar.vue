<script setup lang="ts">
import type { DateRangePickerCalendarProps } from '@vase-ui/vue/date-range-picker'
import type { CalendarBaseProps, CalendarDaySlotProps } from '../calendar/CalendarBase.vue'
import { DateRangePicker as DateRangePickerPrimitive } from '@vase-ui/vue/date-range-picker'
import CalendarBase from '../calendar/CalendarBase.vue'

interface Props extends /* @vue-ignore */ DateRangePickerCalendarProps, /* @vue-ignore */ CalendarBaseProps {}

defineProps<Props>()

defineSlots<{
  day?: (props: CalendarDaySlotProps) => unknown
}>()
</script>

<template>
  <CalendarBase :root="DateRangePickerPrimitive.Calendar" range>
    <template v-if="$slots.day" #day="slotProps">
      <slot name="day" v-bind="slotProps" />
    </template>
  </CalendarBase>
</template>
