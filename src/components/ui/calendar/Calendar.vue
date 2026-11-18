<script setup lang="ts">
import type { CalendarRootProps } from '@vase-ui/vue/calendar'
import type { CalendarBaseProps, CalendarDaySlotProps } from './CalendarBase.vue'
import { Calendar as CalendarPrimitive } from '@vase-ui/vue/calendar'
import CalendarBase from './CalendarBase.vue'

export interface CalendarProps
  extends /* @vue-ignore */ CalendarRootProps<Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime, boolean>,
  /* @vue-ignore */ CalendarBaseProps {}

defineProps<CalendarProps>()

defineSlots<{
  day?: (props: CalendarDaySlotProps) => unknown
}>()
</script>

<template>
  <CalendarBase :root="CalendarPrimitive.Root">
    <template v-if="$slots.day" #day="slotProps">
      <slot name="day" v-bind="slotProps" />
    </template>
  </CalendarBase>
</template>
