<script setup lang="ts">
import type { FieldsetLegendProps } from '@vase-ui/vue/fieldset'
import type { HTMLAttributes } from 'vue'
import { Fieldset as FieldsetPrimitive } from '@vase-ui/vue/fieldset'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ FieldsetLegendProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <FieldsetPrimitive.Legend
    data-slot="fieldset-legend"
    :class="cn('font-semibold text-foreground', props.class)"
  >
    <slot />
  </FieldsetPrimitive.Legend>
</template>
