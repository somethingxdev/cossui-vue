<script setup lang="ts">
import { cn } from '../../lib/utils'
import ThumbText from './ThumbText.vue'

const props = defineProps<{
  checked?: boolean
  radio?: boolean
  class?: string
}>()
</script>

<template>
  <div :class="cn('flex items-center gap-2', props.class)">
    <div
      :class="cn(
        'size-4 shrink-0',
        props.radio ? 'rounded-full' : 'rounded',
        props.checked ? 'bg-linear-to-b from-(--btn-from) to-(--btn-to)' : 'bg-muted-foreground/20',
      )"
    />
    <ThumbText class="w-full" variant="secondary" />
  </div>
</template>
