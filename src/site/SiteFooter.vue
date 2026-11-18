<script setup lang="ts">
import { cn } from '../lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <footer :class="cn('relative mt-8 py-6 text-muted-foreground text-sm before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border/64', props.class)">
    <div class="container flex w-full flex-wrap items-center justify-center gap-x-1 px-4 text-center sm:px-6">
      <span class="font-bold font-heading text-foreground [font-variation-settings:'GEOM'_50,'opsz'_32]">coss ui <span class="text-brand">vue</span></span>
      <span>is an unofficial Vue port of</span>
      <a class="underline underline-offset-4 hover:text-foreground" href="https://coss.com/ui" target="_blank" rel="noreferrer">coss ui</a>,
      <span>built on</span>
      <a class="underline underline-offset-4 hover:text-foreground" href="https://vase-ui.com" target="_blank" rel="noreferrer">Vase UI</a>.
    </div>
  </footer>
</template>
