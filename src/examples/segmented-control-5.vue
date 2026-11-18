<script setup lang="ts">
import { shallowRef } from 'vue'
import { SegmentedControl, SegmentedControlItem } from '../components/ui/segmented-control'

const links = [
  { href: '#overview', label: 'Overview' },
  { href: '#activity', label: 'Activity' },
  { href: '#settings', label: 'Settings' },
]

const current = shallowRef('#overview')
</script>

<template>
  <SegmentedControl as="nav" aria-label="Project sections">
    <SegmentedControlItem
      v-for="link in links"
      :key="link.href"
      as="a"
      :aria-current="link.href === current ? 'page' : undefined"
      :href="link.href"
      @click="current = link.href"
    >
      {{ link.label }}
    </SegmentedControlItem>
  </SegmentedControl>
</template>
