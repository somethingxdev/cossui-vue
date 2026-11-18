<script setup lang="ts">
import { todayDate } from '@ui-sdk/vue/date'
import { shallowRef } from 'vue'
import { Calendar } from '../components/ui/calendar'

const date = shallowRef<string | null>(todayDate())
</script>

<template>
  <Calendar v-model:value="date" />
</template>
