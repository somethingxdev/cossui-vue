<script setup lang="ts">
import { shallowRef } from 'vue'
import { Calendar } from '../components/ui/calendar'

const today = Temporal.Now.plainDateISO()
const firstDay = Temporal.PlainDate.from('1930-01-01')
const lastDay = Temporal.PlainDate.from('2030-12-31')

const date = shallowRef<Temporal.PlainDate | null>(today)
const birthday = shallowRef<Temporal.PlainDate | null>(today)
const dates = shallowRef<Temporal.PlainDate[]>([
  today.subtract({ days: 17 }),
  today.add({ days: 2 }),
  today.add({ days: 6 }),
  today.add({ days: 8 }),
])
</script>

<template>
  <div class="flex flex-wrap items-start gap-8">
    <Calendar v-model:value="date" />
    <Calendar
      v-model:value="birthday"
      caption-layout="dropdown"
      :min-date="firstDay"
      :max-date="lastDay"
    />
    <Calendar
      v-model:value="dates"
      multiple
      fixed-weeks
      show-week-number
      :disabled-dates="{ dayOfWeek: [6, 7] }"
    />
  </div>
</template>
