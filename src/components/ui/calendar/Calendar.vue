<script setup lang="ts">
import type { CalendarBaseProps, CalendarDaySlotProps } from './CalendarBase.vue'
import * as CalendarPrimitive from '@ui-sdk/vue/calendar'
import CalendarBase from './CalendarBase.vue'

type CalendarRootProps = InstanceType<typeof CalendarPrimitive.Calendar>['$props']

export interface CalendarProps extends /* @vue-ignore */ Omit<CalendarRootProps, 'class'>, /* @vue-ignore */ CalendarBaseProps {}

defineProps<CalendarProps>()

defineSlots<{
  day?: (props: CalendarDaySlotProps) => unknown
}>()
</script>

<template>
  <CalendarBase :root="CalendarPrimitive.Calendar">
    <template v-if="$slots.day" #day="slotProps">
      <slot name="day" v-bind="slotProps" />
    </template>
  </CalendarBase>
</template>
