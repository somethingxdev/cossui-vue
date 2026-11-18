<script setup lang="ts">
import type { ProgressIndicatorProps } from '@vase-ui/vue/progress'
import type { HTMLAttributes } from 'vue'
import { Progress as ProgressPrimitive } from '@vase-ui/vue/progress'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ProgressIndicatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ProgressPrimitive.Indicator
    data-slot="progress-indicator"
    :class="cn('bg-primary transition-all duration-500', props.class)"
  />
</template>
