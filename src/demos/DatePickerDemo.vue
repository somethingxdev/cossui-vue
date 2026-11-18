<script setup lang="ts">
import { CalendarIcon } from '@lucide/vue'
import { shallowRef, useId } from 'vue'
import { Button } from '../components/ui/button'
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerField,
  DatePickerPopup,
  DatePickerTrigger,
} from '../components/ui/date-picker'
import { Label } from '../components/ui/label'

const id = useId()
const departure = shallowRef<Temporal.PlainDate | null>(null)
const date = shallowRef<Temporal.PlainDate | null>(null)
</script>

<template>
  <div class="grid max-w-xs gap-6">
    <div class="grid gap-2">
      <Label :for="id">Departure date</Label>
      <DatePicker v-model:value="departure">
        <DatePickerField :id="id" />
        <DatePickerPopup aria-label="Choose a departure date">
          <DatePickerCalendar />
        </DatePickerPopup>
      </DatePicker>
    </div>
    <DatePicker v-model:value="date">
      <DatePickerTrigger :as="Button" class="w-full justify-start" variant="outline">
        <CalendarIcon aria-hidden="true" />
        {{ date ? date.toLocaleString('en-US', { dateStyle: 'long' }) : 'Pick a date' }}
      </DatePickerTrigger>
      <DatePickerPopup aria-label="Choose a date">
        <DatePickerCalendar />
      </DatePickerPopup>
    </DatePicker>
  </div>
</template>
