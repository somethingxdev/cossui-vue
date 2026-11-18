<script setup lang="ts">
import { DateField } from '../components/ui/date-field'
</script>

<template>
  <div class="grid w-full max-w-xs gap-4">
    <DateField size="sm" aria-label="Small" />
    <DateField aria-label="Default" />
    <DateField size="lg" aria-label="Large" />
  </div>
</template>
