<script setup lang="ts">
import { CalendarIcon } from '@lucide/vue'
import { addDays, formatDate, todayDate } from '@ui-sdk/vue/date'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerPopup,
  DatePickerTrigger,
} from '../components/ui/date-picker'

const today = todayDate()
const date = shallowRef<string | null>(today)
const month = shallowRef(today.slice(0, 7))

const presets = [
  { label: 'Today', days: 0 },
  { label: 'Tomorrow', days: 1 },
  { label: 'In 3 days', days: 3 },
  { label: 'In a week', days: 7 },
]

function selectPreset(days: number): void {
  date.value = addDays(today, days)
  month.value = date.value.slice(0, 7)
}
</script>

<template>
  <DatePicker v-model:value="date" v-model:month="month">
    <DatePickerTrigger :as="Button" class="w-full justify-start" variant="outline">
      <CalendarIcon aria-hidden="true" />
      {{ date ? formatDate(date, 'en-US', { dateStyle: 'long' }) : 'Pick a date' }}
    </DatePickerTrigger>
    <DatePickerPopup aria-label="Choose a date">
      <div class="flex max-sm:flex-col">
        <div class="relative py-1 ps-1 max-sm:order-1 max-sm:border-t">
          <div class="flex h-full flex-col sm:border-e sm:pe-3">
            <Button
              v-for="preset in presets"
              :key="preset.days"
              class="w-full justify-start"
              size="sm"
              variant="ghost"
              @click="selectPreset(preset.days)"
            >
              {{ preset.label }}
            </Button>
          </div>
        </div>
        <DatePickerCalendar class="max-sm:pb-3 sm:ps-2" />
      </div>
    </DatePickerPopup>
  </DatePicker>
</template>
