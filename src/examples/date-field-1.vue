<script setup lang="ts">
import { DateField } from '../components/ui/date-field'
import { Label } from '../components/ui/label'
</script>

<template>
  <div class="grid w-full max-w-xs gap-2">
    <Label for="date-field-1-date">Departure date</Label>
    <DateField id="date-field-1-date" />
  </div>
</template>
