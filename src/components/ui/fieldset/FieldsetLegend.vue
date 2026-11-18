<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as FieldPrimitive from '@ui-sdk/vue/field'
import { cn } from '../../../lib/utils'

type FieldLegendProps = InstanceType<typeof FieldPrimitive.FieldLegend>['$props']

interface Props extends /* @vue-ignore */ FieldLegendProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <FieldPrimitive.FieldLegend :class="cn('font-semibold text-foreground', props.class)">
    <slot />
  </FieldPrimitive.FieldLegend>
</template>
