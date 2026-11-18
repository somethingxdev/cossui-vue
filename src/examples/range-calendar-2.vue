<script setup lang="ts">
import { shallowRef } from 'vue'
import { RangeCalendar } from '../components/ui/range-calendar'

const range = shallowRef<[Temporal.PlainDate | null, Temporal.PlainDate | null]>([null, null])
</script>

<template>
  <RangeCalendar
    v-model:value="range"
    :number-of-months="2"
    paged-navigation
    :show-outside-days="false"
  />
</template>
