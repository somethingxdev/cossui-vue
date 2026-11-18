<script setup lang="ts">
import type { ProgressRootProps } from '@vase-ui/vue/progress'
import type { HTMLAttributes } from 'vue'
import { Progress as ProgressPrimitive } from '@vase-ui/vue/progress'
import { cn } from '../../../lib/utils'
import ProgressIndicator from './ProgressIndicator.vue'
import ProgressTrack from './ProgressTrack.vue'

interface Props extends /* @vue-ignore */ ProgressRootProps {
  value: ProgressRootProps['value']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ProgressPrimitive.Root
    data-slot="progress"
    :value="props.value"
    :class="cn('flex w-full flex-col gap-2', props.class)"
  >
    <slot>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </slot>
  </ProgressPrimitive.Root>
</template>
