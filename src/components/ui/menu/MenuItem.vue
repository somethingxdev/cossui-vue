<script setup lang="ts">
import type { MenuItemProps } from '@vase-ui/vue/menu'
import type { HTMLAttributes } from 'vue'
import { Menu as MenuPrimitive } from '@vase-ui/vue/menu'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ MenuItemProps {
  inset?: boolean
  variant?: 'default' | 'destructive'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})
</script>

<template>
  <MenuPrimitive.Item
    :class="cn(
      `flex min-h-8 cursor-default select-none items-center gap-2 rounded-sm px-2 py-1 text-base text-foreground outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-inset:ps-8 data-[variant=destructive]:text-destructive-foreground data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&>svg:not([class*='opacity-'])]:opacity-80 [&>svg:not([class*='size-'])]:size-4.5 sm:[&>svg:not([class*='size-'])]:size-4 [&>svg]:pointer-events-none [&>svg]:-mx-0.5 [&>svg]:shrink-0`,
      props.class,
    )"
    :data-inset="props.inset || undefined"
    data-slot="menu-item"
    :data-variant="props.variant"
  >
    <slot />
  </MenuPrimitive.Item>
</template>
