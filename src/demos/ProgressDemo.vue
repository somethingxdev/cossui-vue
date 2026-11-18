<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
import { shallowRef } from 'vue'
import { Progress, ProgressIndicator, ProgressLabel, ProgressTrack, ProgressValue } from '../components/ui/progress'

const value = shallowRef(20)

useIntervalFn(() => {
  value.value = Math.min(100, Math.round(value.value + Math.random() * 25))
}, 1000)
</script>

<template>
  <div class="flex w-full flex-col gap-8">
    <Progress aria-label="Loading progress" :value="value" />

    <Progress :value="60">
      <div class="flex items-center justify-between gap-2">
        <ProgressLabel>Export data</ProgressLabel>
        <ProgressValue />
      </div>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>

    <Progress :max="512" :value="502">
      <div class="flex items-center justify-between gap-2">
        <ProgressLabel>Upload</ProgressLabel>
        <ProgressValue v-slot="{ value: current }">
          {{ current }} / 512
        </ProgressValue>
      </div>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  </div>
</template>
