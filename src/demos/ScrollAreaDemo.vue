<script setup lang="ts">
import { ScrollArea } from '../components/ui/scroll-area'

const tags = Array.from({ length: 40 }, (_, index) => `v1.2.0-beta.${40 - index}`)
</script>

<template>
  <ScrollArea scroll-fade class="h-72 w-48 rounded-lg border">
    <div class="p-4">
      <h4 class="mb-4 font-medium text-sm leading-none">
        Tags
      </h4>
      <div v-for="tag in tags" :key="tag" class="border-b py-2 text-sm last:border-0">
        {{ tag }}
      </div>
    </div>
  </ScrollArea>
</template>
