<script setup lang="ts">
import ThumbText from './ThumbText.vue'
</script>

<template>
  <div class="flex rounded-lg bg-muted-foreground/12 p-0.5">
    <div class="rounded-[calc(var(--radius-lg)-1px)] bg-linear-to-b from-card to-card/90 p-3 shadow-xs/5 dark:from-background/90 dark:to-background">
      <ThumbText class="w-6 bg-primary" />
    </div>
    <div class="rounded-[calc(var(--radius-lg)-1px)] p-3">
      <ThumbText class="w-6" variant="secondary" />
    </div>
    <div class="rounded-[calc(var(--radius-lg)-1px)] p-3">
      <ThumbText class="w-6" variant="secondary" />
    </div>
  </div>
</template>
