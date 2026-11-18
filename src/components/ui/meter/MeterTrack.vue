<script setup lang="ts">
import type { MeterTrackProps } from '@vase-ui/vue/meter'
import type { HTMLAttributes } from 'vue'
import { Meter as MeterPrimitive } from '@vase-ui/vue/meter'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ MeterTrackProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MeterPrimitive.Track
    data-slot="meter-track"
    :class="cn('block h-2 w-full overflow-hidden bg-input', props.class)"
  >
    <slot />
  </MeterPrimitive.Track>
</template>
