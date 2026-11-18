<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as AccordionPrimitive from '@ui-sdk/vue/accordion'
import { cn } from '../../../lib/utils'

type AccordionItemProps = InstanceType<typeof AccordionPrimitive.AccordionItem>['$props']

interface Props extends /* @vue-ignore */ AccordionItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AccordionPrimitive.AccordionItem :class="cn('border-b last:border-b-0', props.class)">
    <slot />
  </AccordionPrimitive.AccordionItem>
</template>
