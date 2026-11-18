<script setup lang="ts">
import { DateField } from '../components/ui/date-field'

const meeting = Temporal.PlainDateTime.from('2026-11-18T09:30')
</script>

<template>
  <div class="w-full max-w-xs">
    <DateField :default-value="meeting" aria-label="Meeting" />
  </div>
</template>
