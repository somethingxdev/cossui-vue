<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { TabsSize, TabsVariant } from './variants'
import * as TabsPrimitive from '@ui-sdk/vue/tabs'
import { provide } from 'vue'
import { cn } from '../../../lib/utils'
import { segmentedControlIndicatorSurfaceClassName } from '../segmented-control'
import { TabsListContext } from './context'

type TabsListProps = InstanceType<typeof TabsPrimitive.TabsList>['$props']

interface Props extends /* @vue-ignore */ TabsListProps {
  variant?: TabsVariant
  size?: TabsSize
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
})

provide(TabsListContext, props)
</script>

<template>
  <TabsPrimitive.TabsList
    :data-size="props.size"
    :class="cn(
      'relative z-0 flex w-fit items-center justify-center gap-x-0.5 text-muted-foreground',
      'data-[orientation=vertical]:flex-col',
      props.variant === 'default'
        ? 'rounded-lg bg-muted p-0.5 text-muted-foreground/72'
        : 'data-[orientation=vertical]:px-1 data-[orientation=horizontal]:py-1 *:data-[slot=tabs-tab]:hover:bg-accent',
      props.class,
    )"
  >
    <slot />
    <TabsPrimitive.TabsIndicator
      :class="cn(
        'absolute bottom-0 left-0 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-(--active-tab-bottom) transition-[width,translate] duration-200 ease-in-out motion-reduce:transition-none data-[activation-direction=none]:transition-none',
        props.variant === 'underline'
          ? 'z-10 bg-primary data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:-translate-x-px data-[orientation=horizontal]:translate-y-px'
          : cn('-z-1', segmentedControlIndicatorSurfaceClassName),
      )"
    />
  </TabsPrimitive.TabsList>
</template>
