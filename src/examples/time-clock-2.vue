<script setup lang="ts">
import { shallowRef } from 'vue'
import { TimeClock } from '../components/ui/time-clock'

const time = shallowRef<Temporal.PlainTime | null>(Temporal.PlainTime.from('18:45'))
</script>

<template>
  <TimeClock v-model:value="time" aria-label="Alarm" :hour-cycle="24" />
</template>
