<script setup lang="ts">
import type { TooltipPopupProps, TooltipPortalProps, TooltipPositionerProps } from '@vase-ui/vue/tooltip'
import type { HTMLAttributes } from 'vue'
import { Tooltip as TooltipPrimitive } from '@vase-ui/vue/tooltip'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ TooltipPopupProps {
  align?: TooltipPositionerProps['align']
  side?: TooltipPositionerProps['side']
  sideOffset?: TooltipPositionerProps['sideOffset']
  anchor?: TooltipPositionerProps['anchor']
  portalProps?: TooltipPortalProps
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  align: 'center',
  side: 'top',
  sideOffset: 4,
})
</script>

<template>
  <TooltipPrimitive.Portal v-bind="props.portalProps">
    <TooltipPrimitive.Positioner
      :align="props.align"
      :anchor="props.anchor"
      class="z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom,transform] data-instant:transition-none"
      data-slot="tooltip-positioner"
      :side="props.side"
      :side-offset="props.sideOffset"
    >
      <TooltipPrimitive.Popup
        v-bind="$attrs"
        data-slot="tooltip-popup"
        :class="cn(
          'relative flex h-(--popup-height,auto) w-(--popup-width,auto) origin-(--transform-origin) text-balance rounded-md border bg-popover not-dark:bg-clip-padding text-popover-foreground text-xs shadow-md/5 transition-[width,height,scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-md)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0 data-instant:duration-0 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          props.class,
        )"
      >
        <TooltipPrimitive.Viewport
          class="relative size-full overflow-clip px-(--viewport-inline-padding) py-1 [--viewport-inline-padding:--spacing(2)] data-instant:transition-none **:data-current:data-ending-style:opacity-0 **:data-current:data-starting-style:opacity-0 **:data-previous:data-ending-style:opacity-0 **:data-previous:data-starting-style:opacity-0 **:data-current:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding)-2px)] **:data-previous:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding)-2px)] **:data-previous:truncate **:data-current:opacity-100 **:data-previous:opacity-100 **:data-current:transition-opacity **:data-previous:transition-opacity"
          data-slot="tooltip-viewport"
        >
          <slot />
        </TooltipPrimitive.Viewport>
      </TooltipPrimitive.Popup>
    </TooltipPrimitive.Positioner>
  </TooltipPrimitive.Portal>
</template>
