<script setup lang="ts">
import { shallowRef } from 'vue'
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerField,
  DatePickerPopup,
} from '../components/ui/date-picker'

const date = shallowRef<Temporal.PlainDate | null>(null)
</script>

<template>
  <DatePicker v-model:value="date">
    <DatePickerField aria-label="Select date" />
    <DatePickerPopup align="start" :align-offset="-4" :side-offset="8" aria-label="Choose a date">
      <DatePickerCalendar />
    </DatePickerPopup>
  </DatePicker>
</template>
