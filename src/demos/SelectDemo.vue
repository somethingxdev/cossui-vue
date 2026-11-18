<script setup lang="ts">
import { Code2Icon, GlobeIcon, LayersIcon, ZapIcon } from '@lucide/vue'
import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectLabel,
  SelectPopup,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const frameworks = [
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

const languageValues = Object.keys(languages) as Language[]

function renderLanguages(value: Language[]) {
  if (value.length === 0)
    return 'Select languages…'
  const more = value.length > 1
    ? ` (+${value.length - 1} more)`
    : ''
  return languages[value[0]!] + more
}

const categories = [
  { icon: LayersIcon, label: 'Components', value: 'components' },
  { icon: ZapIcon, label: 'Performance', value: 'performance' },
  { icon: GlobeIcon, label: 'Network', value: 'network' },
  { icon: Code2Icon, label: 'Development', value: 'development' },
]

type Category = (typeof categories)[number]
</script>

<template>
  <div class="grid max-w-xs gap-4">
    <Select default-value="next" :items="frameworks">
      <SelectTrigger aria-label="Select framework">
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        <SelectItem v-for="item in frameworks" :key="item.value" :value="item.value">
          {{ item.label }}
        </SelectItem>
      </SelectPopup>
    </Select>

    <Select :items="frameworks">
      <SelectTrigger size="sm" aria-label="Select framework">
        <SelectValue placeholder="Small, without item alignment" />
      </SelectTrigger>
      <SelectPopup :align-item-with-trigger="false">
        <SelectItem v-for="item in frameworks" :key="item.value" :value="item.value">
          {{ item.label }}
        </SelectItem>
      </SelectPopup>
    </Select>

    <Select :items="[...frameworks, ...backend]">
      <SelectTrigger size="lg" aria-label="Select framework">
        <SelectValue placeholder="Large, with groups" />
      </SelectTrigger>
      <SelectPopup>
        <SelectGroup>
          <SelectGroupLabel>Frontend</SelectGroupLabel>
          <SelectItem v-for="item in frameworks" :key="item.value" :value="item.value">
            {{ item.label }}
          </SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>Backend</SelectGroupLabel>
          <SelectItem v-for="item in backend" :key="item.value" :value="item.value">
            {{ item.label }}
          </SelectItem>
        </SelectGroup>
      </SelectPopup>
    </Select>

    <Select :default-value="['javascript', 'typescript'] as Language[]" multiple>
      <SelectTrigger aria-label="Select languages">
        <SelectValue v-slot="{ value }">
          {{ renderLanguages(value) }}
        </SelectValue>
      </SelectTrigger>
      <SelectPopup :align-item-with-trigger="false">
        <SelectItem v-for="value in languageValues" :key="value" :value="value">
          {{ languages[value] }}
        </SelectItem>
      </SelectPopup>
    </Select>

    <Select :default-value="categories[0]" :item-to-string-value="(item: Category) => item.value">
      <SelectLabel>Category</SelectLabel>
      <SelectTrigger>
        <SelectValue v-slot="{ value }">
          <span class="flex items-center gap-2">
            <component :is="value.icon" />
            <span class="truncate">{{ value.label }}</span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectPopup>
        <SelectItem v-for="item in categories" :key="item.value" :value="item">
          <span class="flex items-center gap-2">
            <component :is="item.icon" />
            <span class="truncate">{{ item.label }}</span>
          </span>
        </SelectItem>
      </SelectPopup>
    </Select>

    <Select disabled default-value="next" :items="frameworks">
      <SelectTrigger aria-label="Disabled select">
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        <SelectItem v-for="item in frameworks" :key="item.value" :value="item.value">
          {{ item.label }}
        </SelectItem>
      </SelectPopup>
    </Select>
  </div>
</template>
