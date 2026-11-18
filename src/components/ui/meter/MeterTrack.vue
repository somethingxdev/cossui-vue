<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as MeterPrimitive from '@ui-sdk/vue/meter'
import { cn } from '../../../lib/utils'

type MeterTrackProps = InstanceType<typeof MeterPrimitive.MeterTrack>['$props']

interface Props extends /* @vue-ignore */ MeterTrackProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MeterPrimitive.MeterTrack
    :class="cn('block h-2 w-full overflow-hidden bg-input', props.class)"
  >
    <slot />
  </MeterPrimitive.MeterTrack>
</template>
