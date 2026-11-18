<script setup lang="ts">
import type { TabsListProps } from '@vase-ui/vue/tabs'
import type { HTMLAttributes } from 'vue'
import type { TabsSize, TabsVariant } from './variants'
import { Tabs as TabsPrimitive } from '@vase-ui/vue/tabs'
import { provide } from 'vue'
import { cn } from '../../../lib/utils'
import { TabsListContext } from './context'
import { segmentedControlIndicatorSurfaceClassName } from './variants'

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
  <TabsPrimitive.List
    data-slot="tabs-list"
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
    <TabsPrimitive.Indicator
      data-slot="tab-indicator"
      :class="cn(
        'absolute bottom-0 left-0 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-(--active-tab-bottom) transition-[width,translate] duration-200 ease-in-out motion-reduce:transition-none',
        props.variant === 'underline'
          ? 'z-10 bg-primary data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:-translate-x-px data-[orientation=horizontal]:translate-y-px'
          : cn('-z-1', segmentedControlIndicatorSurfaceClassName),
      )"
    />
  </TabsPrimitive.List>
</template>
