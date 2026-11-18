<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as NumberFieldPrimitive from '@ui-sdk/vue/number-input'
import { cn } from '../../../lib/utils'

type NumberFieldGroupProps = InstanceType<typeof NumberFieldPrimitive.NumberInputGroup>['$props']

interface Props extends /* @vue-ignore */ NumberFieldGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <NumberFieldPrimitive.NumberInputGroup
    :class="cn(
      `relative flex w-full justify-between rounded-lg border border-input bg-background not-dark:bg-clip-padding text-base text-foreground shadow-xs/5 ring-ring/24 transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-data-disabled:not-focus-within:not-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] focus-within:border-ring focus-within:ring-[3px] has-aria-invalid:border-destructive/36 focus-within:has-aria-invalid:border-destructive/64 focus-within:has-aria-invalid:ring-destructive/16 data-disabled:pointer-events-none data-disabled:opacity-64 sm:text-sm dark:bg-input/32 dark:has-aria-invalid:ring-destructive/24 dark:not-data-disabled:not-focus-within:not-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)] [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [[data-disabled],:focus-within,[aria-invalid]]:shadow-none`,
      props.class,
    )"
  >
    <slot />
  </NumberFieldPrimitive.NumberInputGroup>
</template>
