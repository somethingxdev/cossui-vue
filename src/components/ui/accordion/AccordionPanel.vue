<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as AccordionPrimitive from '@ui-sdk/vue/accordion'
import { cn } from '../../../lib/utils'

type AccordionPanelProps = InstanceType<typeof AccordionPrimitive.AccordionPanel>['$props']

interface Props extends /* @vue-ignore */ AccordionPanelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AccordionPrimitive.AccordionPanel
    class="h-(--accordion-panel-height) overflow-hidden text-muted-foreground text-sm transition-[height] duration-200 ease-in-out data-ending-style:h-0 data-starting-style:h-0"
  >
    <div :class="cn('pt-0 pb-4', props.class)">
      <slot />
    </div>
  </AccordionPrimitive.AccordionPanel>
</template>
