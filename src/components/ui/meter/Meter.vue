<script setup lang="ts">
import type { MeterRootProps } from '@vase-ui/vue/meter'
import type { HTMLAttributes } from 'vue'
import { Meter as MeterPrimitive } from '@vase-ui/vue/meter'
import { cn } from '../../../lib/utils'
import MeterIndicator from './MeterIndicator.vue'
import MeterTrack from './MeterTrack.vue'

interface Props extends /* @vue-ignore */ MeterRootProps {
  value: MeterRootProps['value']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MeterPrimitive.Root
    :value="props.value"
    :class="cn('flex w-full flex-col gap-2', props.class)"
  >
    <slot>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </slot>
  </MeterPrimitive.Root>
</template>
