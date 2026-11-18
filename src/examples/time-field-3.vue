<script setup lang="ts">
import { TimeField } from '../components/ui/time-field'
</script>

<template>
  <div class="grid w-full max-w-xs gap-4">
    <TimeField :hour-cycle="12" aria-label="12-hour" />
    <TimeField :hour-cycle="24" aria-label="24-hour" />
  </div>
</template>
