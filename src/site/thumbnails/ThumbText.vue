<script setup lang="ts">
import { cn } from '../../lib/utils'

const props = withDefaults(defineProps<{
  variant?: 'main' | 'secondary'
  class?: string
}>(), {
  variant: 'main',
})
</script>

<template>
  <div :class="cn('h-1.5 rounded-full', props.variant === 'main' ? 'bg-muted-foreground/40' : 'bg-muted-foreground/20', props.class)" />
</template>
