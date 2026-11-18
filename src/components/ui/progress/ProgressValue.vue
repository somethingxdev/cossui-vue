<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as ProgressPrimitive from '@ui-sdk/vue/progress'
import { cn } from '../../../lib/utils'

type ProgressValueProps = InstanceType<typeof ProgressPrimitive.ProgressValue>['$props']

interface Props extends /* @vue-ignore */ ProgressValueProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

defineSlots<{
  default?: (props: { formattedValue: string | null, value: number | null }) => unknown
}>()
</script>

<template>
  <ProgressPrimitive.ProgressValue
    :class="cn('text-sm tabular-nums', props.class)"
  >
    <template v-if="$slots.default" #default="{ state }">
      <slot :formatted-value="state.text" :value="state.value" />
    </template>
  </ProgressPrimitive.ProgressValue>
</template>
