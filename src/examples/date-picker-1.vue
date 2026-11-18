<script setup lang="ts">
import { CalendarIcon } from '@lucide/vue'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerPopup,
  DatePickerTrigger,
} from '../components/ui/date-picker'

const date = shallowRef<Temporal.PlainDate | null>(null)
</script>

<template>
  <DatePicker v-model:value="date">
    <DatePickerTrigger :as="Button" class="w-full justify-start" variant="outline">
      <CalendarIcon aria-hidden="true" />
      {{ date ? date.toLocaleString('en-US', { dateStyle: 'long' }) : 'Pick a date' }}
    </DatePickerTrigger>
    <DatePickerPopup aria-label="Choose a date">
      <DatePickerCalendar />
    </DatePickerPopup>
  </DatePicker>
</template>
