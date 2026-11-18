<script setup lang="ts">
import type { Component, HTMLAttributes } from 'vue'
import type { ComposerItemValue } from './document'
import { computed, shallowRef, watchEffect } from 'vue'
import { cn } from '../../../lib/utils'
import { useComposerEditor } from './editor'

interface Props {
  as?: string | Component
  value?: ComposerItemValue
  disabled?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), { as: 'button' })

const editor = useComposerEditor()
const element = shallowRef<HTMLElement | null>(null)
const disabled = computed(() => Boolean(props.disabled || props.value?.disabled))
const highlighted = computed(() => props.value !== undefined && props.value.id === editor?.highlightedId.value)

watchEffect((onCleanup) => {
  const id = props.value?.id
  if (!editor || id === undefined || !element.value)
    return
  editor.registerItem(id, { element: element.value, disabled: disabled.value })
  onCleanup(() => editor.registerItem(id, null))
})

function select(): void {
  if (!disabled.value && props.value)
    editor?.selectItem(props.value)
}

function highlight(): void {
  if (!disabled.value && props.value)
    editor?.highlightItem(props.value)
}

// Keeps focus, and so the caret, in the editor.
function keepFocus(event: MouseEvent): void {
  if (editor)
    event.preventDefault()
}
</script>

<template>
  <component
    :is="props.as"
    :id="props.value && editor ? `${editor.listId}-${encodeURIComponent(props.value.id)}` : undefined"
    :ref="(el: unknown) => { element = el as HTMLElement | null }"
    type="button"
    data-slot="composer-item"
    :role="editor ? 'option' : undefined"
    :tabindex="editor ? -1 : undefined"
    :aria-selected="editor ? highlighted : undefined"
    :aria-disabled="disabled || undefined"
    :data-highlighted="highlighted ? '' : undefined"
    :data-disabled="disabled ? '' : undefined"
    :disabled="disabled"
    :class="cn(
      'flex min-h-8 w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1 text-start text-base outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm',
      props.class,
    )"
    @pointermove="highlight"
    @click="select"
    @mousedown="keepFocus"
  >
    <slot :highlighted="highlighted" :disabled="disabled" />
  </component>
</template>
