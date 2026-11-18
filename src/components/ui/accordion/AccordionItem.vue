<script setup lang="ts">
import type { AccordionItemProps } from '@vase-ui/vue/accordion'
import type { HTMLAttributes } from 'vue'
import { Accordion as AccordionPrimitive } from '@vase-ui/vue/accordion'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ AccordionItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AccordionPrimitive.Item
    data-slot="accordion-item"
    :class="cn('border-b last:border-b-0', props.class)"
  >
    <slot />
  </AccordionPrimitive.Item>
</template>
