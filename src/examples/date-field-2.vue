<script setup lang="ts">
import { shallowRef } from 'vue'
import { DateField } from '../components/ui/date-field'

const date = shallowRef<Temporal.PlainDate | null>(null)
</script>

<template>
  <div class="grid w-full max-w-xs gap-2">
    <DateField v-model:value="date" aria-label="Date" />
    <p class="text-muted-foreground text-xs">
      Value: {{ date?.toString() ?? 'empty' }}
    </p>
  </div>
</template>
