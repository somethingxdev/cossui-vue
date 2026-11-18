<script setup lang="ts">
import { shallowRef } from 'vue'
import { RangeCalendar } from '../components/ui/range-calendar'

type Range = [Temporal.PlainDate | null, Temporal.PlainDate | null]

const today = Temporal.Now.plainDateISO()

const range = shallowRef<Range>([
  today,
  today.add({ days: 7 }),
])
const trip = shallowRef<Range>([null, null])
</script>

<template>
  <div class="flex flex-wrap items-start gap-8">
    <RangeCalendar v-model:value="range" />
    <RangeCalendar
      v-model:value="trip"
      :number-of-months="2"
      paged-navigation
      :show-outside-days="false"
      :min-date="today"
    />
  </div>
</template>
