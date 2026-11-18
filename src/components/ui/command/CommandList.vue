<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as CommandPrimitive from '@ui-sdk/vue/command'
import { cn } from '../../../lib/utils'
import { ScrollArea } from '../scroll-area'

type CommandListProps = InstanceType<typeof CommandPrimitive.CommandList>['$props']

interface Props extends /* @vue-ignore */ CommandListProps {
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()
</script>

<template>
  <!-- flex: the viewport shrinks to the popup's max height, which `h-full` alone can't resolve. -->
  <ScrollArea class="flex flex-col" overscroll-contain scrollbar-gutter scroll-fade>
    <CommandPrimitive.CommandList
      v-slot="slotProps"
      v-bind="$attrs"
      :class="cn('not-empty:scroll-py-2 not-empty:p-2 in-data-overflow-y:pe-3', props.class)"
    >
      <slot v-bind="slotProps" />
    </CommandPrimitive.CommandList>
  </ScrollArea>
</template>
