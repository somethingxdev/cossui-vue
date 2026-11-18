<script setup lang="ts">
import { ClockIcon } from '@lucide/vue'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  TimePicker,
  TimePickerList,
  TimePickerPopup,
  TimePickerTrigger,
} from '../components/ui/time-picker'

const time = shallowRef<Temporal.PlainTime | null>(null)
</script>

<template>
  <TimePicker v-model:value="time">
    <TimePickerTrigger :as="Button" class="w-full max-w-xs justify-start" variant="outline">
      <ClockIcon aria-hidden="true" />
      {{ time ? time.toLocaleString('en-US', { timeStyle: 'short' }) : 'Pick a time' }}
    </TimePickerTrigger>
    <TimePickerPopup aria-label="Choose a time">
      <TimePickerList />
    </TimePickerPopup>
  </TimePicker>
</template>
