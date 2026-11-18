<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { InputGroupAddonVariants } from './variants'
import { cn } from '../../../lib/utils'
import { inputGroupAddonVariants } from './variants'

const props = withDefaults(defineProps<{
  align?: InputGroupAddonVariants['align']
  class?: HTMLAttributes['class']
}>(), { align: 'inline-start' })

// A press on the addon itself (an icon, a text) focuses the field, as a press on the field would.
function focusControl(event: MouseEvent) {
  const addon = event.currentTarget as HTMLElement
  const isInteractive = (event.target as Element).closest(
    'button, a, input, select, textarea, [role=\'button\'], [role=\'combobox\'], [role=\'listbox\'], [data-slot=\'select-trigger\']',
  )
  if (isInteractive)
    return
  event.preventDefault()
  const parent = addon.parentElement
  const input = parent?.querySelector<HTMLInputElement | HTMLTextAreaElement>('input, textarea')
  if (input && !parent?.querySelector('input:focus, textarea:focus'))
    input.focus()
}
</script>

<template>
  <div
    :data-align="props.align"
    data-slot="input-group-addon"
    :class="cn(inputGroupAddonVariants({ align: props.align }), props.class)"
    @mousedown="focusControl"
  >
    <slot />
  </div>
</template>
