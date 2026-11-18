<script setup lang="ts">
import type { Component, ComponentPublicInstance, HTMLAttributes } from 'vue'
import * as InputPrimitive from '@ui-sdk/vue/input'
import { unrefElement } from '@vueuse/core'
import { computed, useTemplateRef } from 'vue'
import { cn } from '../../../lib/utils'

// Extending InputHTMLAttributes or the part's props makes TypeScript fail with TS2590, so only our own props are typed.
export interface InputProps {
  size?: 'sm' | 'default' | 'lg' | number
  type?: string
  unstyled?: boolean
  nativeInput?: boolean
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<InputProps>(), {
  size: 'default',
})

const control = useTemplateRef<ComponentPublicInstance | HTMLInputElement>('control')
// The root is the wrapper, so the inner input is exposed for focus and reads.
const element = computed(() => unrefElement(control) as HTMLInputElement | null | undefined)

defineExpose({ element })

const inputClass = computed(() => cn(
  'h-8.5 w-full min-w-0 rounded-[inherit] px-[calc(--spacing(3)-1px)] text-foreground leading-8.5 outline-none [transition:background-color_5000000s_ease-in-out_0s] placeholder:text-muted-foreground/72 sm:h-7.5 sm:leading-7.5 autofill:[-webkit-text-fill-color:var(--foreground)]',
  props.size === 'sm' && 'h-7.5 px-[calc(--spacing(2.5)-1px)] leading-7.5 sm:h-6.5 sm:leading-6.5',
  props.size === 'lg' && 'h-9.5 leading-9.5 sm:h-8.5 sm:leading-8.5',
  props.type === 'search' && '[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none',
  props.type === 'file' && 'text-muted-foreground file:me-3 file:bg-transparent file:font-medium file:text-foreground file:text-sm',
))
</script>

<template>
  <span
    data-slot="input-control"
    :data-size="props.size"
    :class="cn(
      !props.unstyled && 'relative inline-flex w-full rounded-lg border border-input bg-background not-dark:bg-clip-padding text-base shadow-xs/5 ring-ring/24 transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-has-disabled:not-has-focus-visible:not-has-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] has-focus-visible:has-aria-invalid:border-destructive/64 has-focus-visible:has-aria-invalid:ring-destructive/16 has-aria-invalid:border-destructive/36 has-focus-visible:border-ring has-autofill:bg-foreground/4 has-disabled:opacity-64 has-[:disabled,:focus-visible,[aria-invalid]]:shadow-none has-focus-visible:ring-[3px] sm:text-sm dark:bg-input/32 dark:has-autofill:bg-foreground/8 dark:has-aria-invalid:ring-destructive/24 dark:not-has-disabled:not-has-focus-visible:not-has-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)]',
      props.class,
    ) || undefined"
  >
    <component
      :is="(props.nativeInput ? 'input' : InputPrimitive.Input) as Component"
      ref="control"
      data-slot="input"
      v-bind="$attrs"
      :type="props.type"
      :size="typeof props.size === 'number' ? props.size : undefined"
      :class="inputClass"
    />
  </span>
</template>
