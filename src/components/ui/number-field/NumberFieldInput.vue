<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as NumberFieldPrimitive from '@ui-sdk/vue/number-input'
import { inject } from 'vue'
import { cn } from '../../../lib/utils'
import { NumberFieldContext } from './context'

type NumberFieldInputProps = InstanceType<typeof NumberFieldPrimitive.NumberInputControl>['$props']

interface Props extends /* @vue-ignore */ NumberFieldInputProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const context = inject(NumberFieldContext, null)
</script>

<template>
  <NumberFieldPrimitive.NumberInputControl
    :id="context?.fieldId.value"
    :class="cn(
      'h-8.5 in-data-[size=lg]:h-9.5 in-data-[size=sm]:h-7.5 w-full min-w-0 grow bg-transparent in-data-[size=sm]:px-[calc(--spacing(2.5)-1px)] px-[calc(--spacing(3)-1px)] text-center text-foreground tabular-nums in-data-[size=lg]:leading-9.5 in-data-[size=sm]:leading-7.5 leading-8.5 outline-none sm:h-7.5 sm:in-data-[size=lg]:h-8.5 sm:in-data-[size=sm]:h-6.5 sm:in-data-[size=lg]:leading-8.5 sm:in-data-[size=sm]:leading-8.5 sm:leading-7.5',
      props.class,
    )"
  />
</template>
