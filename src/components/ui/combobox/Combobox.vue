<script setup lang="ts" generic="Value, Multiple extends boolean | undefined = false, Item = Value">
import type { ComboboxRootActions, ComboboxRootProps } from '@vase-ui/vue/combobox'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { computed, provide, shallowRef, useTemplateRef } from 'vue'
import { ComboboxContext } from './context'

interface Props extends /* @vue-ignore */ ComboboxRootProps<Value, Multiple, Item> {
  multiple?: Multiple & boolean
}

const props = defineProps<Props>()

provide(ComboboxContext, {
  chipsRef: shallowRef(null),
  multiple: computed(() => !!props.multiple),
})

const root = useTemplateRef<ComboboxRootActions & { inputElement: HTMLInputElement | null }>('root')

defineExpose({
  inputElement: computed(() => root.value?.inputElement ?? null),
  unmount: () => root.value?.unmount(),
  close: () => root.value?.close(),
})
</script>

<template>
  <ComboboxPrimitive.Root ref="root" :multiple="props.multiple">
    <slot />
  </ComboboxPrimitive.Root>
</template>
