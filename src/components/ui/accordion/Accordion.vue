<script setup lang="ts">
import * as AccordionPrimitive from '@ui-sdk/vue/accordion'

type AccordionProps = InstanceType<typeof AccordionPrimitive.Accordion>['$props']

interface Props extends /* @vue-ignore */ AccordionProps {}

defineProps<Props>()
</script>

<template>
  <AccordionPrimitive.Accordion>
    <slot />
  </AccordionPrimitive.Accordion>
</template>
