<script setup lang="ts">
import { CalendarIcon } from '@lucide/vue'
import { formatDate, todayDate } from '@ui-sdk/vue/date'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerPopup,
  DatePickerTrigger,
} from '../components/ui/date-picker'
import { Field } from '../components/ui/field'
import { Label } from '../components/ui/label'

const date = shallowRef<string | null>(null)
</script>

<template>
  <Field>
    <Label for="date-picker-3-start">
      Start date
    </Label>
    <DatePicker v-model:value="date" min="1900-01-01" :max="todayDate()">
      <DatePickerTrigger
        id="date-picker-3-start"
        :as="Button"
        class="w-full justify-start"
        variant="outline"
      >
        <CalendarIcon aria-hidden="true" />
        {{ date ? formatDate(date, 'en-US', { dateStyle: 'long' }) : 'Pick a date' }}
      </DatePickerTrigger>
      <DatePickerPopup aria-label="Choose a start date">
        <DatePickerCalendar caption-layout="dropdown" />
      </DatePickerPopup>
    </DatePicker>
  </Field>
</template>
