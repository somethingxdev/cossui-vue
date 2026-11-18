<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as ComboboxPrimitive from '@ui-sdk/vue/combobox'
import { cn } from '../../../lib/utils'
import { ScrollArea } from '../scroll-area'

type ComboboxListProps = InstanceType<typeof ComboboxPrimitive.ComboboxList>['$props']

interface Props extends /* @vue-ignore */ ComboboxListProps {
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()

defineSlots<{
  default?: () => any
  // Called once per visible entry of the root's `items`: an item, a group or a separator.
  item?: (props: { item: any }) => any
}>()
</script>

<template>
  <!-- The popup only has a max height, so the viewport's `h-full` resolves to nothing: it shrinks as a flex item instead. -->
  <ScrollArea
    class="flex flex-col *:data-[slot=scroll-area-viewport]:min-h-0"
    overscroll-contain
    scrollbar-gutter
    scroll-fade
  >
    <ComboboxPrimitive.ComboboxList
      v-slot="{ state }"
      v-bind="$attrs"
      :class="cn('not-empty:scroll-py-1 not-empty:px-1 not-empty:py-1 in-data-overflow-y:pe-3', props.class)"
    >
      <template v-if="$slots.item">
        <slot v-for="item in state.items" name="item" :item="item" />
      </template>
      <slot />
    </ComboboxPrimitive.ComboboxList>
  </ScrollArea>
</template>
