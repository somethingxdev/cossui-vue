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
  const [from, to] = range.value ?? [null, null]
  if (!from)
    return 'Pick a date range'
  return to
    ? `${format(from)} - ${format(to)}`
    : format(from)
})
</script>

<template>
  <DateRangePicker v-model:value="range">
    <DateRangePickerTrigger :as="Button" class="w-full justify-start" variant="outline">
      <CalendarIcon aria-hidden="true" />
      {{ label }}
    </DateRangePickerTrigger>
    <DateRangePickerPopup aria-label="Choose a date range">
      <DateRangePickerCalendar />
    </DateRangePickerPopup>
  </DateRangePicker>
</template>
