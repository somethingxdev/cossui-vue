<script setup lang="ts">
import { shallowRef } from 'vue'
import { TimeField } from '../components/ui/time-field'

const time = shallowRef<Temporal.PlainTime | null>(null)
</script>

<template>
  <div class="grid w-full max-w-xs gap-2">
    <TimeField v-model:value="time" aria-label="Time" />
    <p class="text-muted-foreground text-xs">
      Value: {{ time?.toString() ?? 'empty' }}
    </p>
  </div>
</template>
