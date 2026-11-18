<script setup lang="ts">
import { shallowRef } from 'vue'
import { TimeClock } from '../components/ui/time-clock'

const time = shallowRef<Temporal.PlainTime | null>(Temporal.PlainTime.from('12:00'))
</script>

<template>
  <TimeClock v-model:value="time" aria-label="Reminder" :minute-step="5" />
</template>
