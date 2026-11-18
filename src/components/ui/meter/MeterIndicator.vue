<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as MeterPrimitive from '@ui-sdk/vue/meter'
import { cn } from '../../../lib/utils'

type MeterIndicatorProps = InstanceType<typeof MeterPrimitive.MeterIndicator>['$props']

interface Props extends /* @vue-ignore */ MeterIndicatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MeterPrimitive.MeterIndicator
    :class="cn('block h-full bg-primary transition-all duration-500', props.class)"
  />
</template>
