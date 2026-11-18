<script setup lang="ts">
import type { ComboboxClearProps } from '@vase-ui/vue/combobox'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'

interface Props extends /* @vue-ignore */ ComboboxClearProps {}

defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.Clear data-slot="combobox-clear">
    <slot />
  </ComboboxPrimitive.Clear>
</template>
