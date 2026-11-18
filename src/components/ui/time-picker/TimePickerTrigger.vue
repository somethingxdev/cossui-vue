<script setup lang="ts">
import type { TimePickerTriggerProps } from '@vase-ui/vue/time-picker'
import { TimePicker as TimePickerPrimitive } from '@vase-ui/vue/time-picker'

interface Props extends /* @vue-ignore */ TimePickerTriggerProps {}

defineProps<Props>()
</script>

<template>
  <TimePickerPrimitive.Trigger data-slot="time-picker-trigger">
    <slot />
  </TimePickerPrimitive.Trigger>
</template>
