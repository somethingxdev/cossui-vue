<script setup lang="ts">
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const languages = {
  cpp: 'C++',
  csharp: 'C#',
  go: 'Go',
  java: 'Java',
  javascript: 'JavaScript',
  php: 'PHP',
  python: 'Python',
  rust: 'Rust',
  swift: 'Swift',
  typescript: 'TypeScript',
}

type Language = keyof typeof languages

const values = Object.keys(languages) as Language[]

function renderValue(value: Language[]) {
  if (value.length === 0)
    return 'Select languages…'

  const firstLanguage = value[0] ? languages[value[0]] : ''
  const additionalLanguages = value.length > 1
    ? ` (+${value.length - 1} more)`
    : ''
  return firstLanguage + additionalLanguages
}
</script>

<template>
  <Select :default-value="['javascript', 'typescript'] as Language[]" multiple>
    <SelectTrigger aria-label="Select languages">
      <SelectValue v-slot="{ value }">
        {{ renderValue(value) }}
      </SelectValue>
    </SelectTrigger>
    <SelectPopup :align-item-with-trigger="false">
      <SelectItem v-for="value in values" :key="value" :value="value">
        {{ languages[value] }}
      </SelectItem>
    </SelectPopup>
  </Select>
</template>
