<script setup lang="ts">
import type { Component } from 'vue'
import { useComposerEditor } from './editor'

interface Props {
  as?: string | Component
  disabled?: boolean
}

// `undefined`, not Vue's `false`: an unset `disabled` follows the Composer's `canSubmit`.
const props = withDefaults(defineProps<Props>(), { as: 'button', disabled: undefined })

const editor = useComposerEditor()

// iOS can still move focus on the compatibility mousedown after pointerdown is canceled, hence both.
function preserveInputFocus(event: MouseEvent): void {
  const input = editor?.rootEl.value?.querySelector('[data-slot="composer-input"]')
  if (event.button === 0 && input === document.activeElement)
    event.preventDefault()
}

function onClick(event: MouseEvent): void {
  if (event.defaultPrevented || props.disabled)
    return
  event.preventDefault()
  editor?.submit()
}
</script>

<template>
  <component
    :is="props.as"
    data-slot="composer-submit"
    type="button"
    :disabled="props.disabled ?? !editor?.canSubmit.value"
    @pointerdown="preserveInputFocus"
    @mousedown="preserveInputFocus"
    @click="onClick"
  >
    <slot />
  </component>
</template>
