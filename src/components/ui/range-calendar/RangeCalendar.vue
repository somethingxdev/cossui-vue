<script setup lang="ts">
import type { RangeCalendarRootProps } from '@vase-ui/vue/range-calendar'
import type { CalendarBaseProps, CalendarDaySlotProps } from '../calendar/CalendarBase.vue'
import { RangeCalendar as RangeCalendarPrimitive } from '@vase-ui/vue/range-calendar'
import CalendarBase from '../calendar/CalendarBase.vue'

export interface RangeCalendarProps
  extends /* @vue-ignore */ RangeCalendarRootProps<Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime>,
  /* @vue-ignore */ CalendarBaseProps {}

defineProps<RangeCalendarProps>()

defineSlots<{
  day?: (props: CalendarDaySlotProps) => unknown
}>()
</script>

<template>
  <CalendarBase :root="RangeCalendarPrimitive.Root" range>
    <template v-if="$slots.day" #day="slotProps">
      <slot name="day" v-bind="slotProps" />
    </template>
  </CalendarBase>
</template>
