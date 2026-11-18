<script setup lang="ts">
import type { AutocompleteEmptyProps } from '@vase-ui/vue/autocomplete'
import type { HTMLAttributes } from 'vue'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ AutocompleteEmptyProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.Empty
    data-slot="autocomplete-empty"
    :class="cn('not-empty:p-2 text-center text-base text-muted-foreground sm:text-sm', props.class)"
  >
    <slot />
  </AutocompletePrimitive.Empty>
</template>
