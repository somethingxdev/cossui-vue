<script setup lang="ts">
import type { AutocompleteGroupLabelProps } from '@vase-ui/vue/autocomplete'
import type { HTMLAttributes } from 'vue'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ AutocompleteGroupLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.GroupLabel
    data-slot="autocomplete-group-label"
    :class="cn('px-2 py-1.5 font-medium text-muted-foreground text-xs', props.class)"
  >
    <slot />
  </AutocompletePrimitive.GroupLabel>
</template>
