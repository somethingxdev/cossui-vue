<script setup lang="ts">
import { shallowRef } from 'vue'
import {
  DateRangePicker,
  DateRangePickerCalendar,
  DateRangePickerField,
  DateRangePickerPopup,
} from '../components/ui/date-range-picker'
import { Label } from '../components/ui/label'

const range = shallowRef<[Temporal.PlainDate | null, Temporal.PlainDate | null] | null>(null)
</script>

<template>
  <div class="grid w-full max-w-sm gap-2">
    <Label for="date-range-picker-1-trip">Trip dates</Label>
    <DateRangePicker v-model:value="range">
      <DateRangePickerField id="date-range-picker-1-trip" />
      <DateRangePickerPopup aria-label="Choose trip dates">
        <DateRangePickerCalendar />
      </DateRangePickerPopup>
    </DateRangePicker>
  </div>
</template>
