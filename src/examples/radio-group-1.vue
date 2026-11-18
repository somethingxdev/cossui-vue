<script setup lang="ts">
import { Label } from '../components/ui/label'
import { Radio, RadioGroup } from '../components/ui/radio-group'
</script>

<template>
  <RadioGroup aria-label="Framework" default-value="next">
    <Label>
      <Radio value="next" /> Next.js
    </Label>
    <Label>
      <Radio value="vite" /> Vite
    </Label>
    <Label>
      <Radio value="astro" /> Astro
    </Label>
  </RadioGroup>
</template>
