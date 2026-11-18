<script setup lang="ts">
import type { TimeClockRootProps } from '@vase-ui/vue/time-clock'
import { TimeClock as TimeClockPrimitive } from '@vase-ui/vue/time-clock'
import TimeClockBase from './TimeClockBase.vue'

export interface TimeClockProps
  extends /* @vue-ignore */ TimeClockRootProps<Temporal.PlainTime | Temporal.PlainDateTime | Temporal.ZonedDateTime> {
  granularity?: TimeClockRootProps['granularity']
}

const props = defineProps<TimeClockProps>()
</script>

<template>
  <TimeClockBase
    :root="TimeClockPrimitive.Root"
    :granularity="props.granularity"
    :seconds="props.granularity === 'second'"
  />
</template>
