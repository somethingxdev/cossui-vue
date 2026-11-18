<script setup lang="ts">
import type { AutocompleteGroupProps } from '@vase-ui/vue/autocomplete'
import type { HTMLAttributes } from 'vue'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ AutocompleteGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.Group
    data-slot="autocomplete-group"
    :class="cn('[[role=group]+&]:mt-1.5', props.class)"
  >
    <slot />
  </AutocompletePrimitive.Group>
</template>
