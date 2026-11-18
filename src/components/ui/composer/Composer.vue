<script setup lang="ts">
import type { Component, HTMLAttributes } from 'vue'
import type { ComposerQuery, ComposerValue } from './document'
import type { ComposerChangeDetails, ComposerEditorProps } from './editor'
import * as PopoverPrimitive from '@ui-sdk/vue/popover'
import { cn } from '../../../lib/utils'
import { getComposerText } from './document'
import { focusComposerInput, provideComposerEditor } from './editor'

export interface ComposerProps extends ComposerEditorProps {
  as?: string | Component
  name?: string
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<ComposerProps>(), {
  as: 'form',
  layout: 'stacked',
  submitOnEnter: 'always',
})

const emit = defineEmits<{
  'update:value': [value: ComposerValue]
  'valueChange': [value: ComposerValue, details: ComposerChangeDetails]
  'submit': [value: ComposerValue]
  'queryChange': [query: ComposerQuery | null]
}>()

const editor = provideComposerEditor(props, {
  onValueChange(value, details) {
    emit('update:value', value)
    emit('valueChange', value, details)
  },
  onSubmit: value => emit('submit', value),
  onQueryChange: query => emit('queryChange', query),
})
const { rootEl } = editor
</script>

<template>
  <PopoverPrimitive.Popover :open="editor.open.value" @open-change="editor.onOpenChange">
    <component
      :is="props.as"
      :ref="(element: unknown) => { rootEl = element as HTMLElement | null }"
      data-slot="composer"
      :data-layout="props.layout"
      :data-disabled="editor.disabled.value ? '' : undefined"
      :data-readonly="editor.readOnly.value ? '' : undefined"
      :class="cn(
        'relative flex min-h-0 min-w-0 cursor-text flex-col data-disabled:cursor-default rounded-(--composer-radius) border border-input bg-background not-dark:bg-clip-padding pb-[calc(var(--composer-padding)-1px)] text-foreground shadow-xs/5 ring-ring/24 transition-shadow [--composer-radius:var(--radius-xl)] [--composer-max-rows:4] [--composer-padding:--spacing(2)] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--composer-radius)-1px)] not-data-disabled:not-has-[[data-slot=composer-input]:focus-visible]:not-has-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] has-[[data-slot=composer-input]:focus-visible]:has-aria-invalid:border-destructive/64 has-[[data-slot=composer-input]:focus-visible]:has-aria-invalid:ring-destructive/16 has-[[data-slot=composer-input]:focus-visible]:border-ring has-aria-invalid:border-destructive/36 has-[[data-slot=composer-input]:focus-visible]:shadow-none has-aria-invalid:shadow-none has-[[data-slot=composer-input]:focus-visible]:ring-[3px] aria-invalid:border-destructive/36 aria-invalid:shadow-none data-disabled:opacity-64 data-disabled:shadow-none dark:bg-input/32 dark:aria-invalid:ring-destructive/24 dark:has-aria-invalid:ring-destructive/24 dark:not-data-disabled:not-has-[[data-slot=composer-input]:focus-visible]:not-has-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)] md:[--composer-max-rows:8]',
        'data-[layout=adaptive]:data-multiline:grid-rows-[minmax(0,1fr)_auto] data-[layout=adaptive]:grid data-[layout=adaptive]:grid-cols-[auto_minmax(0,1fr)_auto] data-[layout=adaptive]:items-center data-[layout=adaptive]:not-data-multiline:px-[calc(--spacing(2)-1px)] data-[layout=adaptive]:not-data-multiline:pt-[calc(var(--composer-padding)-1px)]',
        props.class,
      )"
      v-bind="$attrs"
      @mousedown="focusComposerInput($event, true)"
      @click="focusComposerInput($event, false)"
      @submit="editor.onFormSubmit"
    >
      <slot />
      <input
        v-if="props.name"
        type="hidden"
        :name="props.name"
        :value="getComposerText(editor.value.value)"
        :disabled="editor.disabled.value"
      >
    </component>
    <span role="status" aria-atomic="true" class="sr-only">{{ editor.announcement.value }}</span>
  </PopoverPrimitive.Popover>
</template>
