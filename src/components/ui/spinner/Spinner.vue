<script setup lang="ts">
import type { LucideProps } from '@lucide/vue'
import type { HTMLAttributes } from 'vue'
import { Loader2Icon } from '@lucide/vue'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ LucideProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <Loader2Icon
    aria-label="Loading"
    role="status"
    :class="cn('animate-spin', props.class)"
  />
</template>
