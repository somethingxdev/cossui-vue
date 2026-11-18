<script setup lang="ts">
import { shallowRef } from 'vue'
import { Label } from '../components/ui/label'
import {
  TimePicker,
  TimePickerField,
  TimePickerList,
  TimePickerPopup,
} from '../components/ui/time-picker'

const time = shallowRef<Temporal.PlainTime | null>(Temporal.PlainTime.from('09:30'))
</script>

<template>
  <div class="grid w-full max-w-xs gap-2">
    <Label for="time-picker-1-meeting">Meeting time</Label>
    <TimePicker v-model:value="time">
      <TimePickerField id="time-picker-1-meeting" />
      <TimePickerPopup aria-label="Choose a meeting time">
        <TimePickerList />
      </TimePickerPopup>
    </TimePicker>
  </div>
</template>
