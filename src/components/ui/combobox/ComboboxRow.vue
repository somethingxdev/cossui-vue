<script setup lang="ts">
import type { ComboboxRowProps } from '@vase-ui/vue/combobox'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'

interface Props extends /* @vue-ignore */ ComboboxRowProps {}

defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.Row data-slot="combobox-row">
    <slot />
  </ComboboxPrimitive.Row>
</template>
