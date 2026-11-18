<script setup lang="ts">
import { Slider } from '../components/ui/slider'
</script>

<template>
  <Slider class="max-w-64" :get-aria-label="() => 'Value'" :default-value="50" />
</template>
