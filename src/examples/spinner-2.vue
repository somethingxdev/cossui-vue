<script setup lang="ts">
import { Input } from '../components/ui/input'
import { Spinner } from '../components/ui/spinner'
</script>

<template>
  <div class="relative w-full max-w-xs">
    <Input
      aria-label="Search"
      class="*:data-[slot=input]:ps-8"
      disabled
      placeholder="Processing…"
      type="search"
    />
    <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-2.5 text-muted-foreground">
      <Spinner class="size-4" />
    </div>
  </div>
</template>
