<script setup lang="ts">
import * as DatePickerPrimitive from '@ui-sdk/vue/date-picker'
import { provide } from 'vue'

type DatePickerRootProps = InstanceType<typeof DatePickerPrimitive.DatePicker>['$props']

interface Props extends /* @vue-ignore */ DatePickerRootProps {
  months?: number
}

const props = defineProps<Props>()

// The calendar in the popup renders one grid for each month, and only the root knows how many.
provide('calendar-months', () => props.months)
</script>

<template>
  <!-- The root is an element here; `contents` keeps the trigger or the field in the layout of the parent. -->
  <DatePickerPrimitive.DatePicker :months="props.months" class="contents">
    <slot />
  </DatePickerPrimitive.DatePicker>
</template>
