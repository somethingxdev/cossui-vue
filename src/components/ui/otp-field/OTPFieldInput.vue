<script setup lang="ts">
import type { OTPFieldInputProps } from '@vase-ui/vue/otp-field'
import type { HTMLAttributes } from 'vue'
import { OTPField as OTPFieldPrimitive } from '@vase-ui/vue/otp-field'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ OTPFieldInputProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <OTPFieldPrimitive.Input
    data-slot="otp-field-input"
    :spellcheck="false"
    :class="cn(
      'relative in-[[data-slot=otp-field][data-size=lg]]:size-10 size-9 min-w-0 rounded-lg border border-input bg-background not-dark:bg-clip-padding text-center in-[[data-slot=otp-field][data-size=lg]]:text-lg text-base text-foreground in-[[data-slot=otp-field][data-size=lg]]:leading-10 leading-9 shadow-xs/5 outline-none ring-ring/24 transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-focus-visible:not-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] focus-visible:z-10 focus-visible:border-ring focus-visible:shadow-none focus-visible:ring-[3px] focus-visible:ring-ring/24 aria-invalid:border-destructive/36 aria-invalid:shadow-none aria-invalid:focus-visible:border-destructive/64 aria-invalid:focus-visible:ring-destructive/16 sm:in-[[data-slot=otp-field][data-size=lg]]:size-9 sm:size-8 sm:in-[[data-slot=otp-field][data-size=lg]]:text-base sm:text-sm sm:in-[[data-slot=otp-field][data-size=lg]]:leading-9 sm:leading-8 dark:bg-input/32 dark:aria-invalid:focus-visible:ring-destructive/24 dark:not-focus-visible:not-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)]',
      props.class,
    )"
  />
</template>
