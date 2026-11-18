<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as MeterPrimitive from '@ui-sdk/vue/meter'
import { cn } from '../../../lib/utils'

type MeterLabelProps = InstanceType<typeof MeterPrimitive.MeterLabel>['$props']

interface Props extends /* @vue-ignore */ MeterLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MeterPrimitive.MeterLabel
    :class="cn('font-medium text-foreground text-sm', props.class)"
  >
    <slot />
  </MeterPrimitive.MeterLabel>
</template>
