<script setup lang="ts">
import { shallowRef } from 'vue'
import { TimeClock } from '../components/ui/time-clock'

const time = shallowRef<Temporal.PlainTime | null>(Temporal.PlainTime.from('10:30'))
const alarm = shallowRef<Temporal.PlainTime | null>(Temporal.PlainTime.from('18:45'))
</script>

<template>
  <div class="flex flex-wrap items-start gap-10">
    <TimeClock v-model:value="time" aria-label="Meeting time" :hour-cycle="12" />
    <TimeClock
      v-model:value="alarm"
      aria-label="Alarm"
      :hour-cycle="24"
      granularity="second"
      :minute-step="5"
    />
  </div>
</template>
