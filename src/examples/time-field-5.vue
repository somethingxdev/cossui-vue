<script setup lang="ts">
import { TimeField } from '../components/ui/time-field'
</script>

<template>
  <div class="grid w-full max-w-xs gap-4">
    <TimeField size="sm" aria-label="Small" />
    <TimeField aria-label="Default" />
    <TimeField size="lg" aria-label="Large" />
  </div>
</template>
