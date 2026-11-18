<script setup lang="ts">
import type { CalendarBaseProps, CalendarDaySlotProps } from '../calendar/CalendarBase.vue'
import CalendarBase from '../calendar/CalendarBase.vue'

interface Props extends /* @vue-ignore */ CalendarBaseProps {}

defineProps<Props>()

defineSlots<{
  day?: (props: CalendarDaySlotProps) => unknown
}>()
</script>

<template>
  <CalendarBase root="div">
    <template v-if="$slots.day" #day="slotProps">
      <slot name="day" v-bind="slotProps" />
    </template>
  </CalendarBase>
</template>
