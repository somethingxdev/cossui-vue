<script setup lang="ts">
import type { AutocompleteRowProps } from '@vase-ui/vue/autocomplete'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'

interface Props extends /* @vue-ignore */ AutocompleteRowProps {}

defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.Row data-slot="autocomplete-row">
    <slot />
  </AutocompletePrimitive.Row>
</template>
