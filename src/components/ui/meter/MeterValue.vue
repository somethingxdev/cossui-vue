<script setup lang="ts">
import type { MeterValueProps } from '@vase-ui/vue/meter'
import type { HTMLAttributes } from 'vue'
import { Meter as MeterPrimitive } from '@vase-ui/vue/meter'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ MeterValueProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

defineSlots<{
  default?: (props: { formattedValue: string, value: number }) => unknown
}>()
</script>

<template>
  <MeterPrimitive.Value
    data-slot="meter-value"
    :class="cn('text-foreground text-sm tabular-nums', props.class)"
  >
    <template v-if="$slots.default" #default="{ formattedValue, value }">
      <slot :formatted-value="formattedValue" :value="value" />
    </template>
  </MeterPrimitive.Value>
</template>
