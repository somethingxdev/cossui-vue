<script setup lang="ts">
import { DateField } from '../components/ui/date-field'
import { Label } from '../components/ui/label'

const today = Temporal.Now.plainDateISO()
</script>

<template>
  <div class="grid w-full max-w-xs gap-2">
    <Label for="date-field-6-date">Delivery date</Label>
    <DateField id="date-field-6-date" :min-date="today" :max-date="today.add({ months: 1 })" />
    <p class="text-muted-foreground text-xs">
      Choose a date within the next month.
    </p>
  </div>
</template>
