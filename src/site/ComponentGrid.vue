<script setup lang="ts">
import { cn } from '../lib/utils'
import ComponentCard from './ComponentCard.vue'
import { componentDocs } from './docs'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <div :class="cn('grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4', props.class)">
    <ComponentCard v-for="doc in componentDocs" :key="doc.slug" :doc="doc" />
  </div>
</template>
