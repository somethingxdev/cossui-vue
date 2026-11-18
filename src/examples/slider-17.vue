<script setup lang="ts">
import { Slider } from '../components/ui/slider'
</script>

<template>
  <Slider :get-aria-label="() => 'Value'" :default-value="50" orientation="vertical" />
</template>
