<script setup lang="ts">
import { DateField } from '../components/ui/date-field'

const date = Temporal.PlainDate.from('2026-11-18')
</script>

<template>
  <div class="w-full max-w-xs">
    <DateField disabled :default-value="date" aria-label="Disabled" />
  </div>
</template>
