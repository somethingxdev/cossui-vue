<script setup lang="ts">
import { Checkbox } from '../components/ui/checkbox'
import { CheckboxGroup } from '../components/ui/checkbox-group'
import { Label } from '../components/ui/label'
</script>

<template>
  <CheckboxGroup aria-label="Select frameworks" :default-value="['next']">
    <Label>
      <Checkbox value="next" />
      Next.js
    </Label>
    <Label>
      <Checkbox value="vite" />
      Vite
    </Label>
    <Label>
      <Checkbox value="astro" />
      Astro
    </Label>
  </CheckboxGroup>
</template>
