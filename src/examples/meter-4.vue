<script setup lang="ts">
import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from '../components/ui/meter'
</script>

<template>
  <Meter :max="1000" :min="500" :value="700">
    <div class="flex items-center justify-between gap-2">
      <MeterLabel>Bandwidth (Mbps)</MeterLabel>
      <MeterValue v-slot="{ value }">
        {{ value }}
      </MeterValue>
    </div>
    <MeterTrack>
      <MeterIndicator />
    </MeterTrack>
  </Meter>
</template>
