<script setup lang="ts">
import { cn } from '../../lib/utils'

const props = withDefaults(defineProps<{
  withGradient?: boolean
  class?: string
}>(), {
  withGradient: true,
})
</script>

<template>
  <div
    :class="cn(
      'relative flex w-full max-w-72 flex-col rounded-2xl border not-dark:bg-clip-padding text-card-foreground shadow-md/5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)]',
      props.withGradient
        ? 'bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]'
        : 'bg-card/99 dark:bg-card',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
