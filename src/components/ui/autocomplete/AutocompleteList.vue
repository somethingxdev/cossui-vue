<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as AutocompletePrimitive from '@ui-sdk/vue/autocomplete'
import { cn } from '../../../lib/utils'
import { ScrollArea } from '../scroll-area'

type AutocompleteListProps = InstanceType<typeof AutocompletePrimitive.AutocompleteList>['$props']

interface Props extends /* @vue-ignore */ AutocompleteListProps {
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()

// `item` renders each entry of the root's `items` that matches the text; without it, the default slot holds the items.
defineSlots<{
  default?: (props: { state: { items: any[] } }) => unknown
  item?: (props: { item: any }) => unknown
}>()
</script>

<template>
  <!-- flex: the viewport shrinks to the popup's max height, which `h-full` alone can't resolve. -->
  <ScrollArea class="flex flex-col" overscroll-contain scrollbar-gutter scroll-fade>
    <AutocompletePrimitive.AutocompleteList
      v-slot="{ state }"
      v-bind="$attrs"
      :class="cn('not-empty:scroll-py-1 not-empty:p-1 in-data-overflow-y:pe-3', props.class)"
    >
      <template v-if="$slots.item">
        <template v-for="item in (state.items as any[])" :key="item.value ?? item">
          <slot name="item" :item="item" />
        </template>
      </template>
      <slot v-else :state="state" />
    </AutocompletePrimitive.AutocompleteList>
  </ScrollArea>
</template>
