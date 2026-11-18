<script setup lang="ts">
import type { MeterIndicatorProps } from '@vase-ui/vue/meter'
import type { HTMLAttributes } from 'vue'
import { Meter as MeterPrimitive } from '@vase-ui/vue/meter'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ MeterIndicatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MeterPrimitive.Indicator
    data-slot="meter-indicator"
    :class="cn('bg-primary transition-all duration-500', props.class)"
  />
</template>
