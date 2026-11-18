<script setup lang="ts">
import type { ComboboxTriggerProps } from '@vase-ui/vue/combobox'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'

interface Props extends /* @vue-ignore */ ComboboxTriggerProps {}

defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.Trigger data-slot="combobox-trigger">
    <slot />
  </ComboboxPrimitive.Trigger>
</template>
