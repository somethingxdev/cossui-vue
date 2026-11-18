<script setup lang="ts">
import { shallowRef, useId } from 'vue'
import { DateField } from '../components/ui/date-field'
import { Label } from '../components/ui/label'

const id = useId()
const date = shallowRef<Temporal.PlainDate | null>(null)
const meeting = Temporal.PlainDateTime.from('2026-11-18T09:30')
</script>

<template>
  <div class="grid max-w-xs gap-4">
    <div class="grid gap-2">
      <Label :for="id">Departure date</Label>
      <DateField :id="id" v-model:value="date" />
      <p class="text-muted-foreground text-xs">
        Value: {{ date?.toString() ?? 'empty' }}
      </p>
    </div>
    <DateField size="sm" aria-label="Small" />
    <DateField size="lg" :default-value="meeting" aria-label="Meeting" />
    <DateField disabled :default-value="meeting" aria-label="Disabled" />
  </div>
</template>
