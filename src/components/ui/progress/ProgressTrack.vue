<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as ProgressPrimitive from '@ui-sdk/vue/progress'
import { cn } from '../../../lib/utils'

type ProgressTrackProps = InstanceType<typeof ProgressPrimitive.ProgressTrack>['$props']

interface Props extends /* @vue-ignore */ ProgressTrackProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ProgressPrimitive.ProgressTrack
    :class="cn('block h-1.5 w-full overflow-hidden rounded-full bg-input', props.class)"
  >
    <slot />
  </ProgressPrimitive.ProgressTrack>
</template>
