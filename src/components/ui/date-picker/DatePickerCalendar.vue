<script setup lang="ts">
import type { DatePickerCalendarProps } from '@vase-ui/vue/date-picker'
import type { CalendarBaseProps, CalendarDaySlotProps } from '../calendar/CalendarBase.vue'
import { DatePicker as DatePickerPrimitive } from '@vase-ui/vue/date-picker'
import CalendarBase from '../calendar/CalendarBase.vue'

interface Props extends /* @vue-ignore */ DatePickerCalendarProps, /* @vue-ignore */ CalendarBaseProps {}

defineProps<Props>()

defineSlots<{
  day?: (props: CalendarDaySlotProps) => unknown
}>()
</script>

<template>
  <CalendarBase :root="DatePickerPrimitive.Calendar">
    <template v-if="$slots.day" #day="slotProps">
      <slot name="day" v-bind="slotProps" />
    </template>
  </CalendarBase>
</template>
