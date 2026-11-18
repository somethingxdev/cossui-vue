<script setup lang="ts">
import type { ProgressValueProps } from '@vase-ui/vue/progress'
import type { HTMLAttributes } from 'vue'
import { Progress as ProgressPrimitive } from '@vase-ui/vue/progress'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ProgressValueProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

defineSlots<{
  default?: (props: { formattedValue: string | null, value: number | null }) => unknown
}>()
</script>

<template>
  <ProgressPrimitive.Value
    data-slot="progress-value"
    :class="cn('text-sm tabular-nums', props.class)"
  >
    <template v-if="$slots.default" #default="{ formattedValue, value }">
      <slot :formatted-value="formattedValue" :value="value" />
    </template>
  </ProgressPrimitive.Value>
</template>
