<script setup lang="ts">
import type { PopoverPopupProps, PopoverPortalProps, PopoverPositionerProps } from '@vase-ui/vue/popover'
import type { HTMLAttributes } from 'vue'
import { Popover as PopoverPrimitive } from '@vase-ui/vue/popover'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ PopoverPopupProps {
  portalProps?: PopoverPortalProps
  side?: PopoverPositionerProps['side']
  align?: PopoverPositionerProps['align']
  sideOffset?: PopoverPositionerProps['sideOffset']
  alignOffset?: PopoverPositionerProps['alignOffset']
  tooltipStyle?: boolean
  anchor?: PopoverPositionerProps['anchor']
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
  align: 'center',
  sideOffset: 4,
  alignOffset: 0,
})
</script>

<template>
  <PopoverPrimitive.Portal v-bind="props.portalProps">
    <PopoverPrimitive.Positioner
      :align="props.align"
      :align-offset="props.alignOffset"
      :anchor="props.anchor"
      class="z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom,transform] data-instant:transition-none"
      data-slot="popover-positioner"
      :side="props.side"
      :side-offset="props.sideOffset"
    >
      <PopoverPrimitive.Popup
        v-bind="$attrs"
        data-slot="popover-popup"
        :class="cn(
          'relative flex h-(--popup-height,auto) w-(--popup-width,auto) origin-(--transform-origin) rounded-lg border bg-popover not-dark:bg-clip-padding text-popover-foreground shadow-lg/5 outline-none transition-[width,height,scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] has-data-[slot=calendar]:rounded-xl has-data-[slot=calendar]:before:rounded-[calc(var(--radius-xl)-1px)] data-starting-style:scale-98 data-starting-style:opacity-0 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          props.tooltipStyle && 'w-fit text-balance rounded-md text-xs shadow-md/5 before:rounded-[calc(var(--radius-md)-1px)]',
          props.class,
        )"
      >
        <PopoverPrimitive.Viewport
          data-slot="popover-viewport"
          :class="cn(
            'relative size-full max-h-(--available-height) overflow-clip px-(--viewport-inline-padding) py-4 [--viewport-inline-padding:--spacing(4)] has-data-[slot=calendar]:p-2 data-instant:transition-none **:data-current:data-ending-style:opacity-0 **:data-current:data-starting-style:opacity-0 **:data-previous:data-ending-style:opacity-0 **:data-previous:data-starting-style:opacity-0 **:data-current:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding)-2px)] **:data-previous:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding)-2px)] **:data-current:opacity-100 **:data-previous:opacity-100 **:data-current:transition-opacity **:data-previous:transition-opacity',
            props.tooltipStyle ? 'py-1 [--viewport-inline-padding:--spacing(2)]' : 'not-data-transitioning:overflow-y-auto',
          )"
        >
          <slot />
        </PopoverPrimitive.Viewport>
      </PopoverPrimitive.Popup>
    </PopoverPrimitive.Positioner>
  </PopoverPrimitive.Portal>
</template>
