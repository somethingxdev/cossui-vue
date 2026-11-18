<script setup lang="ts">
import { shallowRef } from 'vue'
import { RangeCalendar } from '../components/ui/range-calendar'

const range = shallowRef<[Temporal.PlainDate | null, Temporal.PlainDate | null]>([null, null])
</script>

<template>
  <RangeCalendar v-model:value="range" :disabled-dates="{ dayOfWeek: [6, 7] }" />
</template>
