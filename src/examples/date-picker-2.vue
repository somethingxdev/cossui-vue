<script setup lang="ts">
import { CalendarIcon } from '@lucide/vue'
import { formatDate } from '@ui-sdk/vue/date'
import { computed, shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerPopup,
  DatePickerTrigger,
} from '../components/ui/date-picker'

const range = shallowRef<[string, string] | null>(null)

const format = (date: string) => formatDate(date, 'en-US', { month: 'short', day: '2-digit', year: 'numeric' })
const label = computed(() => range.value
  ? `${format(range.value[0])} - ${format(range.value[1])}`
  : 'Pick a date range')
</script>

<template>
  <DatePicker v-model:value="range" mode="range">
    <DatePickerTrigger :as="Button" class="w-full justify-start" variant="outline">
      <CalendarIcon aria-hidden="true" />
      {{ label }}
    </DatePickerTrigger>
    <DatePickerPopup aria-label="Choose a date range">
      <DatePickerCalendar />
    </DatePickerPopup>
  </DatePicker>
</template>
