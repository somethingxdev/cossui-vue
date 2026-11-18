<script setup lang="ts">
import { shallowRef } from 'vue'
import { RangeCalendar } from '../components/ui/range-calendar'

const range = shallowRef<[Temporal.PlainDate | null, Temporal.PlainDate | null]>([null, null])
</script>

<template>
  <RangeCalendar v-model:value="range" :min-days="3" :max-days="7" />
</template>
