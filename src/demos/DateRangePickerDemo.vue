<script setup lang="ts">
import { CalendarIcon } from '@lucide/vue'
import { computed, shallowRef, useId } from 'vue'
import { Button } from '../components/ui/button'
import {
  DateRangePicker,
  DateRangePickerCalendar,
  DateRangePickerField,
  DateRangePickerPopup,
  DateRangePickerTrigger,
} from '../components/ui/date-range-picker'
import { Label } from '../components/ui/label'

type Range = [Temporal.PlainDate | null, Temporal.PlainDate | null] | null

const id = useId()
const trip = shallowRef<Range>(null)
const range = shallowRef<Range>(null)

const format = (date: Temporal.PlainDate) => date.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
const rangeText = computed(() => {
  const [start, end] = range.value ?? [null, null]
  if (!start)
    return 'Pick a date range'
  return end
    ? `${format(start)} - ${format(end)}`
    : format(start)
})
</script>

<template>
  <div class="grid max-w-sm gap-6">
    <div class="grid gap-2">
      <Label :for="id">Trip dates</Label>
      <DateRangePicker v-model:value="trip">
        <DateRangePickerField :id="id" />
        <DateRangePickerPopup aria-label="Choose trip dates">
          <DateRangePickerCalendar />
        </DateRangePickerPopup>
      </DateRangePicker>
    </div>
    <DateRangePicker v-model:value="range">
      <DateRangePickerTrigger :as="Button" class="w-full justify-start" variant="outline">
        <CalendarIcon aria-hidden="true" />
        {{ rangeText }}
      </DateRangePickerTrigger>
      <DateRangePickerPopup aria-label="Choose dates">
        <DateRangePickerCalendar :number-of-months="2" />
      </DateRangePickerPopup>
    </DateRangePicker>
  </div>
</template>
