<script setup lang="ts">
import { Progress, ProgressIndicator, ProgressLabel, ProgressTrack, ProgressValue } from '../components/ui/progress'
</script>

<template>
  <Progress :max="512" :value="502">
    <div class="flex items-center justify-between gap-2">
      <ProgressLabel>Upload</ProgressLabel>
      <ProgressValue v-slot="{ value }">
        {{ value }} / 512
      </ProgressValue>
    </div>
    <ProgressTrack>
      <ProgressIndicator />
    </ProgressTrack>
  </Progress>
</template>
