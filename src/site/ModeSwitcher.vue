<script setup lang="ts">
import { ContrastIcon } from '@lucide/vue'
import { useDark, useToggle } from '@vueuse/core'
import { Button } from '../components/ui/button'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <Button
    class="relative size-8"
    size="icon"
    title="Toggle theme"
    variant="ghost"
    @click="toggleDark()"
  >
    <ContrastIcon class="size-4 -rotate-45" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
