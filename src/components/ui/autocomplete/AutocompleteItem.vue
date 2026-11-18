<script setup lang="ts">
import type { AutocompleteItemProps } from '@vase-ui/vue/autocomplete'
import type { HTMLAttributes } from 'vue'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ AutocompleteItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.Item
    data-slot="autocomplete-item"
    :class="cn(
      'flex min-h-8 cursor-default select-none items-center rounded-sm px-2 py-1 text-base outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm',
      props.class,
    )"
  >
    <slot />
  </AutocompletePrimitive.Item>
</template>
