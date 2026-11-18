<script setup lang="ts">
import type { ProgressTrackProps } from '@vase-ui/vue/progress'
import type { HTMLAttributes } from 'vue'
import { Progress as ProgressPrimitive } from '@vase-ui/vue/progress'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ProgressTrackProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ProgressPrimitive.Track
    data-slot="progress-track"
    :class="cn('block h-1.5 w-full overflow-hidden rounded-full bg-input', props.class)"
  >
    <slot />
  </ProgressPrimitive.Track>
</template>
