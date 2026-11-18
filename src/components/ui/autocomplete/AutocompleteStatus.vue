<script setup lang="ts">
import type { AutocompleteStatusProps } from '@vase-ui/vue/autocomplete'
import type { HTMLAttributes } from 'vue'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ AutocompleteStatusProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.Status
    data-slot="autocomplete-status"
    :class="cn('px-3 py-2 font-medium text-muted-foreground text-xs empty:m-0 empty:p-0', props.class)"
  >
    <slot />
  </AutocompletePrimitive.Status>
</template>
