<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as ProgressPrimitive from '@ui-sdk/vue/progress'
import { cn } from '../../../lib/utils'

type ProgressIndicatorProps = InstanceType<typeof ProgressPrimitive.ProgressIndicator>['$props']

interface Props extends /* @vue-ignore */ ProgressIndicatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ProgressPrimitive.ProgressIndicator
    :class="cn('block h-full bg-primary transition-all duration-500', props.class)"
  />
</template>
