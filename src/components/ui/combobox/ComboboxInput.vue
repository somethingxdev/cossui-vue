<script setup lang="ts">
import type { ComponentPublicInstance, HTMLAttributes } from 'vue'
import { ChevronsUpDownIcon, XIcon } from '@lucide/vue'
import * as ComboboxPrimitive from '@ui-sdk/vue/combobox'
import { computed, inject, onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import { cn } from '../../../lib/utils'
import ComboboxClear from './ComboboxClear.vue'
import { ComboboxContext, ComboboxPopupContext } from './context'

type ComboboxTriggerProps = InstanceType<typeof ComboboxPrimitive.ComboboxTrigger>['$props']
type ComboboxClearProps = InstanceType<typeof ComboboxPrimitive.ComboboxClear>['$props']

// The input's own attributes pass through `$attrs`; extending their type here is too complex for TypeScript with defaults.
interface Props {
  showTrigger?: boolean
  showClear?: boolean
  size?: 'sm' | 'default' | 'lg' | number
  triggerProps?: ComboboxTriggerProps
  clearProps?: ComboboxClearProps
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  showTrigger: true,
  size: 'default',
})

const buttonClass = computed(() => cn(
  `absolute top-1/2 inline-flex size-8 shrink-0 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-opacity pointer-coarse:after:absolute pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:opacity-100 has-[+[data-slot=combobox-clear]]:hidden sm:size-7 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
  props.size === 'sm'
    ? 'end-0'
    : 'end-0.5',
))

const group = useTemplateRef<HTMLElement>('group')
const input = useTemplateRef<ComponentPublicInstance>('input')

const context = inject(ComboboxContext, null)
const inPopup = inject(ComboboxPopupContext, false)

onMounted(() => {
  if (!context)
    return
  // Inside the popup the input only searches, so it starts empty: the trigger outside shows the value.
  if (inPopup)
    context.controller.setQuery('')
  // The popup lines up with the bordered control, not with the `<input>` inside it.
  else
    context.anchorRef.value = group.value
})

onBeforeUnmount(() => {
  if (context && !inPopup)
    context.anchorRef.value = null
})

// The ref of coss ui goes to the `<input>`.
defineExpose({
  element: computed<HTMLInputElement | null>(() => input.value?.$el ?? null),
})
</script>

<template>
  <div
    ref="group"
    data-slot="combobox-input-group"
    class="relative not-has-[>*.w-full]:w-fit w-full text-foreground has-disabled:opacity-64"
  >
    <div
      v-if="$slots['start-addon']"
      aria-hidden="true"
      data-slot="combobox-start-addon"
      class="pointer-events-none absolute inset-y-0 start-px z-10 flex items-center ps-[calc(--spacing(3)-1px)] opacity-80 has-[+[data-size=sm]]:ps-[calc(--spacing(2.5)-1px)] [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:-mx-0.5"
    >
      <slot name="start-addon" />
    </div>
    <span
      data-slot="input-control"
      :data-size="props.size"
      :class="cn(
        'relative inline-flex w-full rounded-lg border border-input bg-background not-dark:bg-clip-padding text-base shadow-xs/5 ring-ring/24 transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-has-disabled:not-has-focus-visible:not-has-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] has-focus-visible:has-aria-invalid:border-destructive/64 has-focus-visible:has-aria-invalid:ring-destructive/16 has-aria-invalid:border-destructive/36 has-focus-visible:border-ring has-autofill:bg-foreground/4 has-disabled:opacity-64 has-[:disabled,:focus-visible,[aria-invalid]]:shadow-none has-focus-visible:ring-[3px] sm:text-sm dark:bg-input/32 dark:has-autofill:bg-foreground/8 dark:has-aria-invalid:ring-destructive/24 dark:not-has-disabled:not-has-focus-visible:not-has-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)]',
        'has-disabled:opacity-100',
        $slots['start-addon'] && 'data-[size=sm]:*:data-[slot=combobox-input]:ps-[calc(--spacing(7.5)-1px)] *:data-[slot=combobox-input]:ps-[calc(--spacing(8.5)-1px)] sm:data-[size=sm]:*:data-[slot=combobox-input]:ps-[calc(--spacing(7)-1px)] sm:*:data-[slot=combobox-input]:ps-[calc(--spacing(8)-1px)]',
        props.size === 'sm'
          ? 'has-[+[data-slot=combobox-trigger],+[data-slot=combobox-clear]]:*:data-[slot=combobox-input]:pe-6.5'
          : 'has-[+[data-slot=combobox-trigger],+[data-slot=combobox-clear]]:*:data-[slot=combobox-input]:pe-7',
        props.class,
      )"
    >
      <ComboboxPrimitive.ComboboxInput
        ref="input"
        :autofocus="inPopup || undefined"
        v-bind="$attrs"
        :size="typeof props.size === 'number' ? props.size : undefined"
        :class="cn(
          'h-8.5 w-full min-w-0 rounded-[inherit] px-[calc(--spacing(3)-1px)] text-foreground leading-8.5 outline-none [transition:background-color_5000000s_ease-in-out_0s] placeholder:text-muted-foreground/72 sm:h-7.5 sm:leading-7.5 autofill:[-webkit-text-fill-color:var(--foreground)]',
          props.size === 'sm' && 'h-7.5 px-[calc(--spacing(2.5)-1px)] leading-7.5 sm:h-6.5 sm:leading-6.5',
          props.size === 'lg' && 'h-9.5 leading-9.5 sm:h-8.5 sm:leading-8.5',
        )"
      />
    </span>
    <ComboboxPrimitive.ComboboxTrigger v-if="props.showTrigger" aria-label="Toggle list" :class="buttonClass" v-bind="props.triggerProps">
      <ChevronsUpDownIcon />
    </ComboboxPrimitive.ComboboxTrigger>
    <ComboboxClear v-if="props.showClear" aria-label="Clear" :class="buttonClass" v-bind="props.clearProps">
      <XIcon />
    </ComboboxClear>
  </div>
</template>
