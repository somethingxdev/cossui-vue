<script setup lang="ts">
import type { ProgressLabelProps } from '@vase-ui/vue/progress'
import type { HTMLAttributes } from 'vue'
import { Progress as ProgressPrimitive } from '@vase-ui/vue/progress'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ProgressLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ProgressPrimitive.Label
    data-slot="progress-label"
    :class="cn('font-medium text-sm', props.class)"
  >
    <slot />
  </ProgressPrimitive.Label>
</template>
