<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as ProgressPrimitive from '@ui-sdk/vue/progress'
import { cn } from '../../../lib/utils'

type ProgressLabelProps = InstanceType<typeof ProgressPrimitive.ProgressLabel>['$props']

interface Props extends /* @vue-ignore */ ProgressLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ProgressPrimitive.ProgressLabel
    :class="cn('font-medium text-sm', props.class)"
  >
    <slot />
  </ProgressPrimitive.ProgressLabel>
</template>
