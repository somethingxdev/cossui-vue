<script setup lang="ts">
import {
  DateRangePicker,
  DateRangePickerCalendar,
  DateRangePickerField,
  DateRangePickerPopup,
} from '../components/ui/date-range-picker'
</script>

<template>
  <div class="grid w-full max-w-sm gap-4">
    <DateRangePicker>
      <DateRangePickerField size="sm" aria-label="Small" />
      <DateRangePickerPopup aria-label="Choose dates">
        <DateRangePickerCalendar />
      </DateRangePickerPopup>
    </DateRangePicker>
    <DateRangePicker>
      <DateRangePickerField size="lg" aria-label="Large" />
      <DateRangePickerPopup aria-label="Choose dates">
        <DateRangePickerCalendar />
      </DateRangePickerPopup>
    </DateRangePicker>
  </div>
</template>
