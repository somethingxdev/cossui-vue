<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as ProgressPrimitive from '@ui-sdk/vue/progress'
import { cn } from '../../../lib/utils'
import ProgressIndicator from './ProgressIndicator.vue'
import ProgressTrack from './ProgressTrack.vue'

type ProgressRootProps = InstanceType<typeof ProgressPrimitive.Progress>['$props']

interface Props extends /* @vue-ignore */ ProgressRootProps {
  value: ProgressRootProps['value']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ProgressPrimitive.Progress
    :value="props.value"
    :class="cn('flex w-full flex-col gap-2', props.class)"
  >
    <slot>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </slot>
  </ProgressPrimitive.Progress>
</template>
