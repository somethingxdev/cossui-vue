<script setup lang="ts">
import { Separator } from '../components/ui/separator'
</script>

<template>
  <div class="w-full max-w-xs">
    <div class="space-y-1">
      <h4 class="font-medium text-sm leading-none">
        coss ui for Vue
      </h4>
      <p class="text-muted-foreground text-sm">
        Components built on Vase UI.
      </p>
    </div>
    <Separator class="my-4" />
    <div class="flex h-5 items-center gap-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  </div>
</template>
