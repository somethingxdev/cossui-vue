<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { TabsSize } from './variants'
import * as TabsPrimitive from '@ui-sdk/vue/tabs'
import { computed, inject } from 'vue'
import { cn } from '../../../lib/utils'
import { segmentedControlItemLayoutClassName, segmentedControlItemSizeClassNames } from '../segmented-control'
import { TabsListContext } from './context'

type TabsTabProps = InstanceType<typeof TabsPrimitive.TabsTab>['$props']

interface Props extends /* @vue-ignore */ TabsTabProps {
  size?: TabsSize
  value: TabsTabProps['value']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const list = inject(TabsListContext, { size: 'default' } as const)
const resolvedSize = computed(() => props.size ?? list.size)
</script>

<template>
  <TabsPrimitive.TabsTab
    :value="props.value"
    :data-size="resolvedSize"
    :class="cn(
      'relative flex shrink-0 grow cursor-pointer items-center justify-center whitespace-nowrap rounded-md border border-transparent font-medium text-base outline-none transition-[color,background-color,box-shadow] hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring data-disabled:pointer-events-none data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-selected:text-foreground data-disabled:opacity-64 sm:text-sm',
      segmentedControlItemLayoutClassName,
      segmentedControlItemSizeClassNames[resolvedSize],
      props.class,
    )"
  >
    <slot />
  </TabsPrimitive.TabsTab>
</template>
