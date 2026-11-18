<script setup lang="ts">
import { CalendarIcon } from '@lucide/vue'
import { computed, shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  DateRangePicker,
  DateRangePickerCalendar,
  DateRangePickerPopup,
  DateRangePickerTrigger,
} from '../components/ui/date-range-picker'

const range = shallowRef<[Temporal.PlainDate | null, Temporal.PlainDate | null] | null>(null)

const format = (date: Temporal.PlainDate) => date.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
const label = computed(() => {
  const [start, end] = range.value ?? [null, null]
  if (!start)
    return 'Pick a date range'
  return end
    ? `${format(start)} - ${format(end)}`
    : format(start)
})
</script>

<template>
  <DateRangePicker v-model:value="range">
    <DateRangePickerTrigger :as="Button" class="w-full max-w-sm justify-start" variant="outline">
      <CalendarIcon aria-hidden="true" />
      {{ label }}
    </DateRangePickerTrigger>
    <DateRangePickerPopup aria-label="Choose dates">
      <DateRangePickerCalendar :number-of-months="2" paged-navigation />
    </DateRangePickerPopup>
  </DateRangePicker>
</template>
