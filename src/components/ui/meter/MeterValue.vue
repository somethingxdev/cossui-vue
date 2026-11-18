<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as MeterPrimitive from '@ui-sdk/vue/meter'
import { cn } from '../../../lib/utils'

type MeterValueProps = InstanceType<typeof MeterPrimitive.MeterValue>['$props']

interface Props extends /* @vue-ignore */ MeterValueProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

defineSlots<{
  default?: (props: { formattedValue: string, value: number }) => unknown
}>()
</script>

<template>
  <MeterPrimitive.MeterValue
    :class="cn('text-foreground text-sm tabular-nums', props.class)"
  >
    <template v-if="$slots.default" #default="{ state }">
      <slot :formatted-value="state.text" :value="state.value" />
    </template>
  </MeterPrimitive.MeterValue>
</template>
