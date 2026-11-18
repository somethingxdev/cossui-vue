<script setup lang="ts">
import { shallowRef } from 'vue'
import { Calendar } from '../components/ui/calendar'

const date = shallowRef<Temporal.PlainDate | null>(Temporal.Now.plainDateISO())
const minDate = Temporal.PlainDate.from('1930-01-01')
const maxDate = Temporal.PlainDate.from('2030-12-31')
</script>

<template>
  <Calendar
    v-model:value="date"
    caption-layout="dropdown"
    :min-date="minDate"
    :max-date="maxDate"
  />
</template>
