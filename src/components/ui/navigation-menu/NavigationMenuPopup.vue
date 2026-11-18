<script setup lang="ts">
import type {
  NavigationMenuPopupProps,
  NavigationMenuPortalProps,
  NavigationMenuPositionerProps,
} from '@vase-ui/vue/navigation-menu'
import type { HTMLAttributes } from 'vue'
import { NavigationMenu as NavigationMenuPrimitive } from '@vase-ui/vue/navigation-menu'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ NavigationMenuPopupProps {
  side?: NavigationMenuPositionerProps['side']
  align?: NavigationMenuPositionerProps['align']
  sideOffset?: NavigationMenuPositionerProps['sideOffset']
  alignOffset?: NavigationMenuPositionerProps['alignOffset']
  portalProps?: NavigationMenuPortalProps
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
  align: 'center',
  sideOffset: 8,
  alignOffset: 0,
})
</script>

<template>
  <NavigationMenuPrimitive.Portal v-bind="props.portalProps">
    <!-- The before element fills the 8px side offset, so the pointer can move from a trigger to the popup without closing it. -->
    <NavigationMenuPrimitive.Positioner
      :align="props.align"
      :align-offset="props.alignOffset"
      class="z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-(--duration) ease-(--easing) [--duration:0.35s] [--easing:cubic-bezier(0.22,1,0.36,1)] before:absolute data-[side=bottom]:before:inset-x-0 data-[side=top]:before:inset-x-0 data-[side=left]:before:inset-y-0 data-[side=right]:before:inset-y-0 data-[side=bottom]:before:-top-2 data-[side=top]:before:-bottom-2 data-[side=left]:before:-right-2 data-[side=right]:before:-left-2 data-[side=bottom]:before:h-2 data-[side=top]:before:h-2 data-[side=left]:before:w-2 data-[side=right]:before:w-2 data-instant:transition-none"
      data-slot="navigation-menu-positioner"
      :side="props.side"
      :side-offset="props.sideOffset"
    >
      <NavigationMenuPrimitive.Popup
        v-bind="$attrs"
        data-slot="navigation-menu-popup"
        :class="cn(
          'relative h-(--popup-height,auto) w-(--popup-width,auto) origin-(--transform-origin) rounded-lg border bg-popover not-dark:bg-clip-padding text-popover-foreground shadow-lg/5 outline-none transition-[width,height,scale,opacity] duration-(--duration) ease-(--easing) before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:duration-150 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          props.class,
        )"
      >
        <NavigationMenuPrimitive.Viewport
          class="relative size-full overflow-hidden"
          data-slot="navigation-menu-viewport"
        />
      </NavigationMenuPrimitive.Popup>
    </NavigationMenuPrimitive.Positioner>
  </NavigationMenuPrimitive.Portal>
</template>
