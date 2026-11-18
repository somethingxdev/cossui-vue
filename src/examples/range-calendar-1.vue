<script setup lang="ts">
import { shallowRef } from 'vue'
import { RangeCalendar } from '../components/ui/range-calendar'

const today = Temporal.Now.plainDateISO()
const range = shallowRef<[Temporal.PlainDate | null, Temporal.PlainDate | null]>([
  today,
  today.add({ days: 7 }),
])
</script>

<template>
  <RangeCalendar v-model:value="range" />
</template>
