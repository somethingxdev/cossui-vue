<script setup lang="ts">
import { shallowRef, useId } from 'vue'
import { Label } from '../components/ui/label'
import { TimeField } from '../components/ui/time-field'

const id = useId()
const time = shallowRef<Temporal.PlainTime | null>(null)
</script>

<template>
  <div class="grid max-w-xs gap-4">
    <div class="grid gap-2">
      <Label :for="id">Alarm</Label>
      <TimeField :id="id" v-model:value="time" />
      <p class="text-muted-foreground text-xs">
        Value: {{ time?.toString() ?? 'empty' }}
      </p>
    </div>
    <TimeField size="sm" :hour-cycle="24" aria-label="24-hour" />
    <TimeField size="lg" granularity="second" aria-label="With seconds" />
    <TimeField disabled aria-label="Disabled" />
  </div>
</template>
