<script setup lang="ts">
import { Progress, ProgressIndicator, ProgressLabel, ProgressTrack, ProgressValue } from '../components/ui/progress'
</script>

<template>
  <Progress :value="60">
    <div class="flex items-center justify-between gap-2">
      <ProgressLabel>Export data</ProgressLabel>
      <ProgressValue />
    </div>
    <ProgressTrack>
      <ProgressIndicator />
    </ProgressTrack>
  </Progress>
</template>
