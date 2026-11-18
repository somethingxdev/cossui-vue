<script setup lang="ts">
import type { DateRangePickerTriggerProps } from '@vase-ui/vue/date-range-picker'
import { DateRangePicker as DateRangePickerPrimitive } from '@vase-ui/vue/date-range-picker'

interface Props extends /* @vue-ignore */ DateRangePickerTriggerProps {}

defineProps<Props>()
</script>

<template>
  <DateRangePickerPrimitive.Trigger data-slot="date-range-picker-trigger">
    <slot />
  </DateRangePickerPrimitive.Trigger>
</template>
