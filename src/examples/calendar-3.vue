<script setup lang="ts">
import { addDays, todayDate } from '@ui-sdk/vue/date'
import { shallowRef } from 'vue'
import { Calendar } from '../components/ui/calendar'

const today = todayDate()
const range = shallowRef<[string, string] | null>([
  today,
  addDays(today, 7),
])
</script>

<template>
  <Calendar v-model:value="range" mode="range" />
</template>
