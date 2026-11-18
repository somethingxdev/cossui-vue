<script setup lang="ts">
import type { DatePickerTriggerProps } from '@vase-ui/vue/date-picker'
import { DatePicker as DatePickerPrimitive } from '@vase-ui/vue/date-picker'

interface Props extends /* @vue-ignore */ DatePickerTriggerProps {}

defineProps<Props>()
</script>

<template>
  <DatePickerPrimitive.Trigger data-slot="date-picker-trigger">
    <slot />
  </DatePickerPrimitive.Trigger>
</template>
