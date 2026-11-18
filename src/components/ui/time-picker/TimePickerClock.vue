<script setup lang="ts">
import type { TimePickerClockProps } from '@vase-ui/vue/time-picker'
import { TimePicker as TimePickerPrimitive } from '@vase-ui/vue/time-picker'
import TimeClockBase from '../time-clock/TimeClockBase.vue'

interface Props extends /* @vue-ignore */ TimePickerClockProps {}

defineProps<Props>()
</script>

<template>
  <TimeClockBase :root="TimePickerPrimitive.Clock" />
</template>
