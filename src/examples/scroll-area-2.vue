<script setup lang="ts">
import { ScrollArea } from '../components/ui/scroll-area'
</script>

<template>
  <ScrollArea class="max-w-96 rounded-lg border">
    <div class="flex w-max gap-4 p-4">
      <div
        v-for="i in 20"
        :key="i"
        class="flex h-20 w-32 shrink-0 items-center justify-center rounded-md bg-muted"
      >
        <span class="font-medium text-sm">Item {{ i }}</span>
      </div>
    </div>
  </ScrollArea>
</template>
