<script setup lang="ts" generic="T = string, Multiple extends boolean | undefined = false">
import type { ComboboxOptions } from '@ui-sdk/vue/combobox'
import * as ComboboxPrimitive from '@ui-sdk/vue/combobox'
import { computed, provide, shallowRef, useAttrs } from 'vue'
import { ComboboxContext } from './context'

// Every prop goes straight to the part, which is generic the same way.
type Props = /* @vue-ignore */ ComboboxOptions<T, Multiple>

defineProps<Props>()

const attrs = useAttrs()
const anchorRef = shallowRef<HTMLElement | null>(null)

// The parts reach the root through a controller: the one passed in, or one of our own.
const controller = (attrs.controller as ComboboxPrimitive.ComboboxController<any, any> | undefined)
  ?? ComboboxPrimitive.createComboboxController<any, any>()

provide(ComboboxContext, {
  anchorRef,
  controller,
  multiple: computed(() => attrs.multiple != null && attrs.multiple !== false),
})

// An input inside the popup leaves with it while focused, so focus goes back to the trigger.
let focusInPopup = false

function onOpenChange(open: boolean) {
  focusInPopup = !open && !!document.activeElement?.closest('[data-slot=combobox-content]')
}

function onOpenChangeComplete(open: boolean) {
  if (!open && focusInPopup && document.activeElement === document.body)
    anchorRef.value?.focus()
}
</script>

<template>
  <ComboboxPrimitive.Combobox
    :controller="controller"
    @open-change="onOpenChange"
    @open-change-complete="onOpenChangeComplete"
  >
    <slot />
  </ComboboxPrimitive.Combobox>
</template>
