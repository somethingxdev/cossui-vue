<script setup lang="ts">
import {
  DateRangePicker,
  DateRangePickerCalendar,
  DateRangePickerField,
  DateRangePickerPopup,
} from '../components/ui/date-range-picker'

const today = Temporal.Now.plainDateISO()
</script>

<template>
  <div class="w-full max-w-sm">
    <DateRangePicker :min-date="today" :max-date="today.add({ months: 3 })">
      <DateRangePickerField aria-label="Booking dates" />
      <DateRangePickerPopup aria-label="Choose booking dates">
        <DateRangePickerCalendar />
      </DateRangePickerPopup>
    </DateRangePicker>
  </div>
</template>
