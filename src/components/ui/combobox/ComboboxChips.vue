<script setup lang="ts">
import type { ComboboxChipsProps } from '@vase-ui/vue/combobox'
import type { ComponentPublicInstance, HTMLAttributes } from 'vue'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { unrefElement } from '@vueuse/core'
import { inject } from 'vue'
import { cn } from '../../../lib/utils'
import { ComboboxContext } from './context'

interface Props extends /* @vue-ignore */ ComboboxChipsProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const context = inject(ComboboxContext, null)

function setChipsRef(chips: Element | ComponentPublicInstance | null) {
  if (context)
    context.chipsRef.value = unrefElement(chips as ComponentPublicInstance | null) ?? null
}
</script>

<template>
  <ComboboxPrimitive.Chips
    :ref="setChipsRef"
    data-slot="combobox-chips"
    :class="cn(
      'relative inline-flex min-h-9 w-full flex-wrap gap-1 rounded-lg border border-input bg-background not-dark:bg-clip-padding p-[calc(--spacing(1)-1px)] text-base shadow-xs/5 outline-none ring-ring/24 transition-shadow *:min-h-7 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-has-disabled:not-focus-within:not-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] focus-within:border-ring focus-within:ring-[3px] has-disabled:pointer-events-none has-data-[size=lg]:min-h-10 has-data-[size=sm]:min-h-8 has-aria-invalid:border-destructive/36 has-disabled:opacity-64 has-[:disabled,:focus-within,[aria-invalid]]:shadow-none focus-within:has-aria-invalid:border-destructive/64 focus-within:has-aria-invalid:ring-destructive/16 has-data-[size=lg]:*:min-h-8 has-data-[size=sm]:*:min-h-6 sm:min-h-8 sm:text-sm sm:has-data-[size=lg]:min-h-9 sm:has-data-[size=sm]:min-h-7 sm:*:min-h-6 sm:has-data-[size=lg]:*:min-h-7 sm:has-data-[size=sm]:*:min-h-5 dark:not-has-disabled:bg-input/32 dark:has-aria-invalid:ring-destructive/24 dark:not-has-disabled:not-focus-within:not-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)]',
      props.class,
    )"
  >
    <div
      v-if="$slots['start-addon']"
      aria-hidden="true"
      data-slot="combobox-start-addon"
      class="flex shrink-0 items-center ps-2 opacity-80 has-[~[data-size=sm]]:has-[+[data-slot=combobox-chip]]:pe-1.5 has-[~[data-size=sm]]:ps-1.5 has-[+[data-slot=combobox-chip]]:pe-2 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:-ms-0.5 [&_svg]:-me-1.5"
    >
      <slot name="start-addon" />
    </div>
    <slot />
  </ComboboxPrimitive.Chips>
</template>
