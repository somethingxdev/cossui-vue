<script setup lang="ts">
import { shallowRef } from 'vue'
import { Checkbox } from '../components/ui/checkbox'
import { CheckboxGroup } from '../components/ui/checkbox-group'
import { Label } from '../components/ui/label'

const frameworks = [
  { id: 'next', name: 'Next.js' },
  { id: 'vite', name: 'Vite' },
  { id: 'astro', name: 'Astro' },
]

const value = shallowRef<string[]>([])
</script>

<template>
  <CheckboxGroup
    v-model:value="value"
    :all-values="frameworks.map(framework => framework.id)"
    aria-labelledby="checkbox-group-3-caption"
  >
    <Label id="checkbox-group-3-caption">
      <Checkbox name="frameworks" parent />
      Frameworks
    </Label>
    <Label v-for="framework in frameworks" :key="framework.id" class="ms-4">
      <Checkbox :value="framework.id" />
      {{ framework.name }}
    </Label>
  </CheckboxGroup>
</template>
