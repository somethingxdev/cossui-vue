<script setup lang="ts">
import { TimeClock } from '../components/ui/time-clock'

const time = Temporal.PlainTime.from('16:20')
</script>

<template>
  <TimeClock read-only :default-value="time" aria-label="Read-only time" />
</template>
