<script setup lang="ts">
import type { AutocompleteTriggerProps } from '@vase-ui/vue/autocomplete'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'

interface Props extends /* @vue-ignore */ AutocompleteTriggerProps {}

defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.Trigger data-slot="autocomplete-trigger">
    <slot />
  </AutocompletePrimitive.Trigger>
</template>
