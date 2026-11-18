<script setup lang="ts">
import { shallowRef } from 'vue'
import {
  TimePicker,
  TimePickerClock,
  TimePickerField,
  TimePickerPopup,
} from '../components/ui/time-picker'

const time = shallowRef<Temporal.PlainTime | null>(Temporal.PlainTime.from('10:30'))
</script>

<template>
  <div class="w-full max-w-xs">
    <TimePicker v-model:value="time">
      <TimePickerField aria-label="Reminder time" />
      <TimePickerPopup aria-label="Choose a reminder time">
        <TimePickerClock />
      </TimePickerPopup>
    </TimePicker>
  </div>
</template>
