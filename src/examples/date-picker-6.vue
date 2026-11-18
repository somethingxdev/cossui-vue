<script setup lang="ts">
import { CalendarIcon } from '@lucide/vue'
import { formatDate } from '@ui-sdk/vue/date'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerPopup,
  DatePickerTrigger,
} from '../components/ui/date-picker'

const date = shallowRef<string | null>(null)
const open = shallowRef(false)

function handleSelect(value: string | [string, string] | null): void {
  date.value = typeof value === 'string'
    ? value
    : null
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
      {{ date ? formatDate(date, 'en-US', { dateStyle: 'long' }) : 'Pick a date' }}
    </DatePickerTrigger>
    <DatePickerPopup aria-label="Choose a date">
      <DatePickerCalendar />
    </DatePickerPopup>
  </DatePicker>
</template>
