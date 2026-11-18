<script setup lang="ts">
import { BoldIcon, ItalicIcon, UnderlineIcon } from '@lucide/vue'
import { Toggle } from '../components/ui/toggle'
</script>

<template>
  <div class="flex items-center gap-1">
    <Toggle aria-label="Toggle bold" variant="outline">
      <BoldIcon />
    </Toggle>
    <Toggle aria-label="Toggle italic" variant="outline">
      <ItalicIcon />
    </Toggle>
    <Toggle aria-label="Toggle underline" variant="outline">
      <UnderlineIcon />
    </Toggle>
  </div>
</template>
