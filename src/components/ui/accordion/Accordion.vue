<script setup lang="ts">
import type { AccordionRootProps } from '@vase-ui/vue/accordion'
import { Accordion as AccordionPrimitive } from '@vase-ui/vue/accordion'

interface Props extends /* @vue-ignore */ AccordionRootProps {}

defineProps<Props>()
</script>

<template>
  <AccordionPrimitive.Root data-slot="accordion">
    <slot />
  </AccordionPrimitive.Root>
</template>
