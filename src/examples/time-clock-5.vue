<script setup lang="ts">
import { shallowRef } from 'vue'
import { TimeClock } from '../components/ui/time-clock'

const time = shallowRef<Temporal.PlainTime | null>(Temporal.PlainTime.from('10:00'))
const minTime = Temporal.PlainTime.from('09:00')
const maxTime = Temporal.PlainTime.from('17:00')
</script>

<template>
  <TimeClock
    v-model:value="time"
    aria-label="Opening hours"
    :min-time="minTime"
    :max-time="maxTime"
  />
</template>
