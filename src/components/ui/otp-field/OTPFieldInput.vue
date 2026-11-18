<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as OTPFieldPrimitive from '@ui-sdk/vue/otp-input'
import { inject } from 'vue'
import { cn } from '../../../lib/utils'
import { OTPFieldContext } from './context'

type OTPFieldInputProps = InstanceType<typeof OTPFieldPrimitive.OTPInputSlot>['$props']

interface Props extends /* @vue-ignore */ OTPFieldInputProps {
  index: number
  placeholder?: string
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const context = inject(OTPFieldContext, {})
</script>

<template>
  <OTPFieldPrimitive.OTPInputSlot
    v-slot="{ state }"
    :index="props.index"
    :class="cn(
      'relative flex in-[[data-slot=otp-input][data-size=lg]]:size-10 size-9 min-w-0 items-center justify-center rounded-lg border border-input bg-background not-dark:bg-clip-padding in-[[data-slot=otp-input][data-size=lg]]:text-lg text-base text-foreground shadow-xs/5 ring-ring/24 transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-data-active:before:shadow-[0_1px_--theme(--color-black/4%)] after:pointer-events-none after:absolute after:h-4 after:w-px after:bg-foreground data-active:z-10 data-active:border-ring data-active:shadow-none data-active:ring-[3px] not-data-fake-caret:after:hidden data-fake-caret:after:animate-caret-blink in-[[data-slot=otp-input]:has([aria-invalid=true])]:border-destructive/36 in-[[data-slot=otp-input]:has([aria-invalid=true])]:shadow-none in-[[data-slot=otp-input]:has([aria-invalid=true])]:before:shadow-none! in-[[data-slot=otp-input]:has([aria-invalid=true])]:data-active:border-destructive/64 in-[[data-slot=otp-input]:has([aria-invalid=true])]:data-active:ring-destructive/16 sm:in-[[data-slot=otp-input][data-size=lg]]:size-9 sm:size-8 sm:in-[[data-slot=otp-input][data-size=lg]]:text-base sm:text-sm dark:bg-input/32 dark:in-[[data-slot=otp-input]:has([aria-invalid=true])]:data-active:ring-destructive/24 dark:not-data-active:before:shadow-[0_-1px_--theme(--color-white/6%)]',
      props.class,
    )"
  >
    <template v-if="state.char">
      {{ context.mask ? '•' : state.char }}
    </template>
    <span v-else-if="props.placeholder && !state.active" class="text-muted-foreground">{{ props.placeholder }}</span>
  </OTPFieldPrimitive.OTPInputSlot>
</template>
