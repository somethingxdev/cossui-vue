<script setup lang="ts">
import type { MeterLabelProps } from '@vase-ui/vue/meter'
import type { HTMLAttributes } from 'vue'
import { Meter as MeterPrimitive } from '@vase-ui/vue/meter'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ MeterLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MeterPrimitive.Label
    data-slot="meter-label"
    :class="cn('font-medium text-foreground text-sm', props.class)"
  >
    <slot />
  </MeterPrimitive.Label>
</template>
