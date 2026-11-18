<script setup lang="ts">
import { ScrollArea } from '../components/ui/scroll-area'

const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-alpha.${i}`)
</script>

<template>
  <ScrollArea class="h-64 rounded-lg border">
    <div class="px-4 py-2">
      <h4 class="mb-2 font-medium text-sm">
        Tags
      </h4>
      <div class="flex flex-col gap-1">
        <div v-for="tag in tags" :key="tag" class="text-sm">
          {{ tag }}
        </div>
      </div>
    </div>
  </ScrollArea>
</template>
