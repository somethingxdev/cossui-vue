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
const open = shallowRef(false)

function handleSelect(value: Temporal.PlainDate | null): void {
  date.value = value
  open.value = false
}
</script>

<template>
  <DatePicker
    v-model:open="open"
    :value="date"
    :close-on-select="false"
    @update:value="handleSelect"
  >
    <DatePickerTrigger :as="Button" class="w-full justify-start" variant="outline">
      <CalendarIcon aria-hidden="true" />
      {{ date ? date.toLocaleString('en-US', { dateStyle: 'long' }) : 'Pick a date' }}
    </DatePickerTrigger>
    <DatePickerPopup aria-label="Choose a date">
      <DatePickerCalendar />
    </DatePickerPopup>
  </DatePicker>
</template>
