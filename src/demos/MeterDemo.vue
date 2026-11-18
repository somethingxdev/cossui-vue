<script setup lang="ts">
import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from '../components/ui/meter'
</script>

<template>
  <div class="flex w-full flex-col gap-8">
    <Meter :value="75">
      <div class="flex items-center justify-between gap-2">
        <MeterLabel>Storage usage</MeterLabel>
        <MeterValue />
      </div>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </Meter>

    <Meter aria-label="Storage usage" :value="50" />

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
  </div>
</template>
