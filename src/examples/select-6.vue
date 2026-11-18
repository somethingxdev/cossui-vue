<script setup lang="ts">
import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectPopup,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const frontend = [
  { label: 'Next.js', value: 'next' },
  { label: 'Vite', value: 'vite' },
  { label: 'Astro', value: 'astro' },
]

const backend = [
  { label: 'Express', value: 'express' },
  { label: 'NestJS', value: 'nestjs' },
  { label: 'Fastify', value: 'fastify' },
  { label: 'Django', value: 'django' },
  { label: 'Flask', value: 'flask' },
  { label: 'Rails', value: 'rails' },
]
</script>

<template>
  <Select :items="[...frontend, ...backend]">
    <SelectTrigger aria-label="Select framework">
      <SelectValue placeholder="Select framework" />
    </SelectTrigger>
    <SelectPopup>
      <SelectGroup>
        <SelectGroupLabel>Frontend</SelectGroupLabel>
        <SelectItem v-for="{ label, value } in frontend" :key="value" :value="value">
          {{ label }}
        </SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectGroupLabel>Backend</SelectGroupLabel>
        <SelectItem v-for="{ label, value } in backend" :key="value" :value="value">
          {{ label }}
        </SelectItem>
      </SelectGroup>
    </SelectPopup>
  </Select>
</template>
