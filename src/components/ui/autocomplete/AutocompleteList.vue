<script setup lang="ts">
import type { AutocompleteListProps } from '@vase-ui/vue/autocomplete'
import type { HTMLAttributes } from 'vue'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'
import { ScrollArea } from '../scroll-area'

interface Props extends /* @vue-ignore */ AutocompleteListProps {
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()

// The `item` slot is forwarded only when given: the part renders the filtered items when it has one.
</script>

<template>
  <ScrollArea overscroll-contain scrollbar-gutter scroll-fade>
    <AutocompletePrimitive.List
      v-bind="$attrs"
      data-slot="autocomplete-list"
      :class="cn('not-empty:scroll-py-1 not-empty:p-1 in-data-has-overflow-y:pe-3', props.class)"
    >
      <template v-if="$slots.item" #item="slotProps">
        <slot name="item" v-bind="slotProps" />
      </template>
      <slot />
    </AutocompletePrimitive.List>
  </ScrollArea>
</template>
