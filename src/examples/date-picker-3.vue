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
import { Field, FieldLabel } from '../components/ui/field'

const date = shallowRef<Temporal.PlainDate | null>(null)
const minDate = Temporal.PlainDate.from('1900-01-01')
const maxDate = Temporal.Now.plainDateISO()
</script>

<template>
  <Field>
    <FieldLabel for="date-picker-3-start">
      Start date
    </FieldLabel>
    <DatePicker v-model:value="date" :min-date="minDate" :max-date="maxDate">
      <DatePickerTrigger
        id="date-picker-3-start"
        :as="Button"
        class="w-full justify-start"
        variant="outline"
      >
        <CalendarIcon aria-hidden="true" />
        {{ date ? date.toLocaleString('en-US', { dateStyle: 'long' }) : 'Pick a date' }}
      </DatePickerTrigger>
      <DatePickerPopup aria-label="Choose a start date">
        <DatePickerCalendar caption-layout="dropdown" />
      </DatePickerPopup>
    </DatePicker>
  </Field>
</template>
