<script setup lang="ts">
import { shallowRef, useId } from 'vue'
import { Label } from '../components/ui/label'
import {
  TimePicker,
  TimePickerClock,
  TimePickerColumn,
  TimePickerField,
  TimePickerList,
  TimePickerPopup,
} from '../components/ui/time-picker'

const id = useId()
const meeting = shallowRef<Temporal.PlainTime | null>(Temporal.PlainTime.from('09:30'))
const start = shallowRef<Temporal.PlainTime | null>(Temporal.PlainTime.from('14:30'))
const reminder = shallowRef<Temporal.PlainTime | null>(Temporal.PlainTime.from('10:30'))
</script>

<template>
  <div class="grid max-w-xs gap-6">
    <div class="grid gap-2">
      <Label :for="id">Meeting time</Label>
      <TimePicker v-model:value="meeting" :hour-cycle="12">
        <TimePickerField :id="id" />
        <TimePickerPopup aria-label="Choose a meeting time">
          <TimePickerList :step="30" />
        </TimePickerPopup>
      </TimePicker>
    </div>
    <TimePicker v-model:value="start" :hour-cycle="12">
      <TimePickerField aria-label="Start time" />
      <TimePickerPopup aria-label="Choose a start time">
        <div class="flex gap-1">
          <TimePickerColumn unit="hour" />
          <TimePickerColumn unit="minute" :step="5" />
          <TimePickerColumn unit="dayPeriod" />
        </div>
      </TimePickerPopup>
    </TimePicker>
    <TimePicker v-model:value="reminder" :hour-cycle="12">
      <TimePickerField aria-label="Reminder time" />
      <TimePickerPopup aria-label="Choose a reminder time">
        <TimePickerClock />
      </TimePickerPopup>
    </TimePicker>
  </div>
</template>
