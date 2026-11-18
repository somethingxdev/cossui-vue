<script setup lang="ts">
import { TimeField } from '../components/ui/time-field'

const time = Temporal.PlainTime.from('09:30')
</script>

<template>
  <div class="w-full max-w-xs">
    <TimeField disabled :default-value="time" aria-label="Disabled" />
  </div>
</template>
