<script setup lang="ts">
import type { ContextMenuLinkItemProps } from '@vase-ui/vue/context-menu'
import type { HTMLAttributes } from 'vue'
import { ContextMenu as ContextMenuPrimitive } from '@vase-ui/vue/context-menu'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ContextMenuLinkItemProps {
  inset?: boolean
  variant?: 'default' | 'destructive'
  closeOnClick?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  closeOnClick: true,
})
</script>

<template>
  <ContextMenuPrimitive.LinkItem
    :class="cn(
      `flex min-h-8 cursor-default select-none items-center gap-2 rounded-sm px-2 py-1 text-base text-foreground outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-inset:ps-8 data-[variant=destructive]:text-destructive-foreground data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&>svg:not([class*='opacity-'])]:opacity-80 [&>svg:not([class*='size-'])]:size-4.5 sm:[&>svg:not([class*='size-'])]:size-4 [&>svg]:pointer-events-none [&>svg]:-mx-0.5 [&>svg]:shrink-0`,
      props.class,
    )"
    :close-on-click="props.closeOnClick"
    :data-inset="props.inset || undefined"
    data-slot="context-menu-link-item"
    :data-variant="props.variant"
  >
    <slot />
  </ContextMenuPrimitive.LinkItem>
</template>
