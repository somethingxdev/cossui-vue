<script setup lang="ts">
import type { ComboboxListProps } from '@vase-ui/vue/combobox'
import type { HTMLAttributes } from 'vue'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { cn } from '../../../lib/utils'
import { ScrollArea } from '../scroll-area'

interface Props extends /* @vue-ignore */ ComboboxListProps {
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()

// The `item` slot is forwarded only when given: the part renders the filtered items when it has one.
</script>

<template>
  <ScrollArea overscroll-contain scrollbar-gutter scroll-fade>
    <ComboboxPrimitive.List
      v-bind="$attrs"
      data-slot="combobox-list"
      :class="cn('not-empty:scroll-py-1 not-empty:px-1 not-empty:py-1 in-data-has-overflow-y:pe-3', props.class)"
    >
      <template v-if="$slots.item" #item="slotProps">
        <slot name="item" v-bind="slotProps" />
      </template>
      <slot />
    </ComboboxPrimitive.List>
  </ScrollArea>
</template>
