<script setup lang="ts">
import { shallowRef } from 'vue'
import {
  TimePicker,
  TimePickerField,
  TimePickerList,
  TimePickerPopup,
} from '../components/ui/time-picker'

const time = shallowRef<Temporal.PlainTime | null>(null)
const minTime = Temporal.PlainTime.from('09:00')
const maxTime = Temporal.PlainTime.from('17:00')
</script>

<template>
  <div class="w-full max-w-xs">
    <TimePicker v-model:value="time" :min-time="minTime" :max-time="maxTime">
      <TimePickerField aria-label="Appointment time" />
      <TimePickerPopup aria-label="Choose an appointment time">
        <TimePickerList :step="15" />
      </TimePickerPopup>
    </TimePicker>
  </div>
</template>
