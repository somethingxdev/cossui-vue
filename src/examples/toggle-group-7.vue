<script setup lang="ts">
import { BoldIcon, ItalicIcon, UnderlineIcon } from '@lucide/vue'
import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group'
</script>

<template>
  <ToggleGroup :default-value="['bold']">
    <ToggleGroupItem aria-label="Toggle bold" value="bold">
      <BoldIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle italic" disabled value="italic">
      <ItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle underline" value="underline">
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
</template>
