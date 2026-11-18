<script setup lang="ts">
import type { NumberFieldScrubAreaProps } from '@vase-ui/vue/number-field'
import type { HTMLAttributes } from 'vue'
import { NumberField as NumberFieldPrimitive } from '@vase-ui/vue/number-field'
import { inject } from 'vue'
import { cn } from '../../../lib/utils'
import { Label } from '../label'
import { NumberFieldContext } from './context'
import CursorGrowIcon from './CursorGrowIcon.vue'

interface Props extends /* @vue-ignore */ NumberFieldScrubAreaProps {
  label: string
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const context = inject(NumberFieldContext, null)

if (!context) {
  throw new Error('NumberFieldScrubArea must be used within a NumberField component for accessibility.')
}

const { fieldId } = context
</script>

<template>
  <NumberFieldPrimitive.ScrubArea
    data-slot="number-field-scrub-area"
    :class="cn('flex cursor-ew-resize', props.class)"
  >
    <Label class="cursor-ew-resize" :for="fieldId">
      {{ props.label }}
    </Label>
    <NumberFieldPrimitive.ScrubAreaCursor class="drop-shadow-[0_1px_1px_#0008] filter">
      <CursorGrowIcon />
    </NumberFieldPrimitive.ScrubAreaCursor>
  </NumberFieldPrimitive.ScrubArea>
</template>
