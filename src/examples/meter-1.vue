<script setup lang="ts">
import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from '../components/ui/meter'
</script>

<template>
  <Meter :value="75">
    <div class="flex items-center justify-between gap-2">
      <MeterLabel>Storage usage</MeterLabel>
      <MeterValue />
    </div>
    <MeterTrack>
      <MeterIndicator />
    </MeterTrack>
  </Meter>
</template>
