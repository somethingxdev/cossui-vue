<script setup lang="ts">
import { Slider } from '../components/ui/slider'
</script>

<template>
  <Slider
    class="max-w-64"
    :get-aria-label="(index: number) => index === 0 ? 'Minimum value' : 'Maximum value'"
    :default-value="[25, 75]"
  />
</template>
