<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as MeterPrimitive from '@ui-sdk/vue/meter'
import { cn } from '../../../lib/utils'
import MeterIndicator from './MeterIndicator.vue'
import MeterTrack from './MeterTrack.vue'

type MeterRootProps = InstanceType<typeof MeterPrimitive.Meter>['$props']

interface Props extends /* @vue-ignore */ MeterRootProps {
  value: MeterRootProps['value']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MeterPrimitive.Meter
    :value="props.value"
    :class="cn('flex w-full flex-col gap-2', props.class)"
  >
    <slot>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </slot>
  </MeterPrimitive.Meter>
</template>
