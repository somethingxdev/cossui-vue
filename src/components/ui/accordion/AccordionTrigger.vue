<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ChevronDownIcon } from '@lucide/vue'
import * as AccordionPrimitive from '@ui-sdk/vue/accordion'
import { cn } from '../../../lib/utils'

type AccordionTriggerProps = InstanceType<typeof AccordionPrimitive.AccordionTrigger>['$props']

interface Props extends /* @vue-ignore */ AccordionTriggerProps {
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()
</script>

<template>
  <AccordionPrimitive.AccordionHeader class="flex">
    <AccordionPrimitive.AccordionTrigger
      v-bind="$attrs"
      :class="cn(
        'flex flex-1 cursor-pointer items-start justify-between gap-4 rounded-md py-4 text-left font-medium text-sm outline-none transition-all focus-visible:ring-[3px] focus-visible:ring-ring data-disabled:pointer-events-none data-disabled:opacity-64 data-open:*:data-[slot=accordion-indicator]:rotate-180',
        props.class,
      )"
    >
      <slot />
      <ChevronDownIcon
        class="pointer-events-none size-4 shrink-0 translate-y-0.5 opacity-80 transition-transform duration-200 ease-in-out"
        data-slot="accordion-indicator"
      />
    </AccordionPrimitive.AccordionTrigger>
  </AccordionPrimitive.AccordionHeader>
</template>
