<script setup lang="ts">
import { shallowRef } from 'vue'
import { RangeCalendar } from '../components/ui/range-calendar'

const today = Temporal.Now.plainDateISO()
const range = shallowRef<[Temporal.PlainDate | null, Temporal.PlainDate | null]>([null, null])
</script>

<template>
  <RangeCalendar v-model:value="range" :min-date="today" />
</template>
