<script setup lang="ts">
import type { ContextMenuSubmenuTriggerProps } from '@vase-ui/vue/context-menu'
import type { HTMLAttributes } from 'vue'
import { ChevronRightIcon } from '@lucide/vue'
import { ContextMenu as ContextMenuPrimitive } from '@vase-ui/vue/context-menu'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ContextMenuSubmenuTriggerProps {
  inset?: boolean
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ContextMenuPrimitive.SubmenuTrigger
    :class="cn(
      `flex min-h-8 items-center gap-2 rounded-sm px-2 py-1 text-base text-foreground outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-popup-open:bg-accent data-inset:ps-8 data-highlighted:text-accent-foreground data-popup-open:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&>svg:not(:last-child)]:-mx-0.5 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none`,
      props.class,
    )"
    :data-inset="props.inset || undefined"
    data-slot="context-menu-sub-trigger"
  >
    <slot />
    <ChevronRightIcon class="ms-auto -me-0.5 opacity-80" />
  </ContextMenuPrimitive.SubmenuTrigger>
</template>
