<script setup lang="ts">
import { Label } from '../components/ui/label'
import { TimeField } from '../components/ui/time-field'
</script>

<template>
  <div class="grid w-full max-w-xs gap-2">
    <Label for="time-field-1-alarm">Alarm</Label>
    <TimeField id="time-field-1-alarm" />
  </div>
</template>
