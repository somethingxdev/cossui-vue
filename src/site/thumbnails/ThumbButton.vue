<script setup lang="ts">
import { cn } from '../../lib/utils'

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary'
  class?: string
}>(), {
  variant: 'secondary',
})
</script>

<template>
  <div
    :class="cn(
      props.variant === 'primary' ? 'h-4' : 'h-1.5',
      'w-7 rounded-sm',
      props.variant === 'primary' ? 'bg-linear-to-b from-(--btn-from) to-(--btn-to)' : 'bg-muted-foreground/20',
      props.class,
    )"
  />
</template>
