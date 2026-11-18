<script setup lang="ts">
import { shallowRef } from 'vue'
import {
  TimePicker,
  TimePickerColumn,
  TimePickerField,
  TimePickerPopup,
} from '../components/ui/time-picker'

const time = shallowRef<Temporal.PlainTime | null>(Temporal.PlainTime.from('14:30'))
</script>

<template>
  <div class="w-full max-w-xs">
    <TimePicker v-model:value="time" :hour-cycle="12">
      <TimePickerField aria-label="Start time" />
      <TimePickerPopup aria-label="Choose a start time">
        <div class="flex gap-1">
          <TimePickerColumn unit="hour" />
          <TimePickerColumn unit="minute" :step="5" />
          <TimePickerColumn unit="dayPeriod" />
        </div>
      </TimePickerPopup>
    </TimePicker>
  </div>
</template>
