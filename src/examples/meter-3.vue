<script setup lang="ts">
import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from '../components/ui/meter'
</script>

<template>
  <Meter :max="5" :value="3">
    <div class="flex items-center justify-between gap-2">
      <MeterLabel>Rating</MeterLabel>
      <MeterValue v-slot="{ value }">
        {{ value }} / 5
      </MeterValue>
    </div>
    <MeterTrack>
      <MeterIndicator />
    </MeterTrack>
  </Meter>
</template>
