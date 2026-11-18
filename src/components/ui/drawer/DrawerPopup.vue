<script setup lang="ts">
import type { DrawerPopupProps, DrawerPortalProps } from '@vase-ui/vue/drawer'
import type { HTMLAttributes } from 'vue'
import type { DrawerPosition } from './context'
import { XIcon } from '@lucide/vue'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'
import { createReusableTemplate } from '@vueuse/core'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import { useDrawerPosition } from './context'
import DrawerBackdrop from './DrawerBackdrop.vue'
import DrawerBar from './DrawerBar.vue'
import DrawerViewport from './DrawerViewport.vue'

interface Props extends /* @vue-ignore */ DrawerPopupProps {
  showCloseButton?: boolean
  position?: DrawerPosition
  variant?: 'default' | 'straight' | 'inset'
  showBar?: boolean
  portalProps?: DrawerPortalProps
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const position = useDrawerPosition(() => props.position)

const [DefinePopup, ReusePopup] = createReusableTemplate()

const popupClass = computed(() => {
  const p = position.value
  return cn(
    'relative flex max-h-full min-h-0 w-full min-w-0 flex-col bg-popover not-dark:bg-clip-padding text-popover-foreground shadow-lg/5 outline-none transition-[transform,box-shadow,height,background-color] duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform [--peek:calc(--spacing(6)-1px)] [--scale-base:calc(max(0,1-(var(--nested-drawers)*var(--stack-step))))] [--scale:clamp(0,calc(var(--scale-base)+(var(--stack-step)*var(--stack-progress))),1)] [--shrink:calc(1-var(--scale))] [--stack-peek-offset:max(0px,calc((var(--nested-drawers)-var(--stack-progress))*var(--peek)))] [--stack-progress:clamp(0,var(--drawer-swipe-progress),1)] [--stack-step:0.05] before:pointer-events-none before:absolute before:inset-0 before:shadow-[0_1px_--theme(--color-black/4%)] after:pointer-events-none after:absolute after:bg-popover data-swiping:select-none data-nested-drawer-open:overflow-hidden data-nested-drawer-open:bg-[color-mix(in_srgb,var(--popover),var(--color-black)_calc(2%*(var(--nested-drawers)-var(--stack-progress))))] data-ending-style:shadow-transparent data-starting-style:shadow-transparent data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] dark:data-nested-drawer-open:bg-[color-mix(in_srgb,var(--popover),var(--color-black)_calc(6%*(var(--nested-drawers)-var(--stack-progress))))] dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
    'touch-none',
    p === 'bottom' && 'z-1 transform-[translateY(calc(var(--keyboard-snap-offset)+var(--drawer-swipe-movement-y)))] data-ending-style:transform-[translateY(calc(100%+env(safe-area-inset-bottom,0px)+var(--inset)))] data-starting-style:transform-[translateY(calc(100%+env(safe-area-inset-bottom,0px)+var(--inset)))] row-start-2 -mb-[max(0px,calc(var(--keyboard-snap-offset)+clamp(0,1,var(--keyboard-snap-offset)/1px)*var(--drawer-swipe-movement-y,0px)))] border-t pb-[max(0px,calc(max(env(safe-area-inset-bottom,0px),var(--drawer-keyboard-inset,0px))+var(--keyboard-snap-offset)+clamp(0,1,var(--keyboard-snap-offset)/1px)*var(--drawer-swipe-movement-y,0px)))] not-data-starting-style:not-data-ending-style:transition-[transform,box-shadow,height,background-color,margin,padding] [--keyboard-snap-offset:max(0px,calc(var(--drawer-snap-point-offset,0px)-var(--drawer-keyboard-inset,0px)))] after:inset-x-0 after:top-full after:h-(--bleed) has-data-[slot=drawer-bar]:pt-2 data-ending-style:mb-0 data-starting-style:mb-0 data-ending-style:pb-0 data-starting-style:pb-0',
    p === 'top' && 'data-starting-style:transform-[translateY(calc(-100%-var(--inset)))] data-ending-style:transform-[translateY(calc(-100%-var(--inset)))] transform-[translateY(var(--drawer-swipe-movement-y))] border-b after:inset-x-0 after:bottom-full after:h-(--bleed) has-data-[slot=drawer-bar]:pb-2',
    p === 'left' && 'data-starting-style:transform-[translateX(calc(-100%-var(--inset)))] data-ending-style:transform-[translateX(calc(-100%-var(--inset)))] transform-[translateX(var(--drawer-swipe-movement-x))] w-[calc(100%-(--spacing(12)))] max-w-md border-e after:inset-y-0 after:end-full after:w-(--bleed) has-data-[slot=drawer-bar]:pe-2',
    p === 'right' && 'transform-[translateX(var(--drawer-swipe-movement-x))] data-ending-style:transform-[translateX(calc(100%+var(--inset)))] data-starting-style:transform-[translateX(calc(100%+var(--inset)))] col-start-2 w-[calc(100%-(--spacing(12)))] max-w-md border-s after:inset-y-0 after:start-full after:w-(--bleed) has-data-[slot=drawer-bar]:ps-2',
    props.variant !== 'straight' && cn(
      p === 'bottom' && 'rounded-t-2xl',
      p === 'top' && 'rounded-b-2xl **:data-[slot=drawer-footer]:rounded-b-[calc(var(--radius-2xl)-1px)]',
      p === 'left' && 'rounded-e-2xl **:data-[slot=drawer-footer]:rounded-ee-[calc(var(--radius-2xl)-1px)]',
      p === 'right' && 'rounded-s-2xl **:data-[slot=drawer-footer]:rounded-es-[calc(var(--radius-2xl)-1px)]',
    ),
    props.variant === 'default' && cn(
      p === 'bottom' && 'before:rounded-t-[calc(var(--radius-2xl)-1px)]',
      p === 'top' && 'before:rounded-b-[calc(var(--radius-2xl)-1px)]',
      p === 'left' && 'before:rounded-e-[calc(var(--radius-2xl)-1px)]',
      p === 'right' && 'before:rounded-s-[calc(var(--radius-2xl)-1px)]',
    ),
    props.variant === 'inset' && 'before:hidden sm:rounded-2xl sm:border sm:after:bg-transparent sm:before:rounded-[calc(var(--radius-2xl)-1px)] sm:**:data-[slot=drawer-footer]:rounded-b-[calc(var(--radius-2xl)-1px)]',
    props.variant === 'straight' && '[--stack-step:0]',
    (p === 'bottom' || p === 'top') && 'h-(--drawer-height,auto) [--height:max(0px,calc(var(--drawer-frontmost-height,var(--drawer-height))))] data-nested-drawer-open:h-(--height)',
    p === 'bottom' && 'data-nested-drawer-open:transform-[translateY(calc(var(--drawer-swipe-movement-y)-var(--stack-peek-offset)-(var(--shrink)*var(--height))))_scale(var(--scale))] origin-[50%_calc(100%-var(--inset))]',
    p === 'top' && 'data-nested-drawer-open:transform-[translateY(calc(var(--drawer-swipe-movement-y)+var(--stack-peek-offset)+(var(--shrink)*var(--height))))_scale(var(--scale))] origin-[50%_var(--inset)]',
    p === 'left' && 'data-nested-drawer-open:transform-[translateX(calc(var(--drawer-swipe-movement-x)+var(--stack-peek-offset)))_scale(var(--scale))] origin-right',
    p === 'right' && 'data-nested-drawer-open:transform-[translateX(calc(var(--drawer-swipe-movement-x)-var(--stack-peek-offset)))_scale(var(--scale))] origin-left',
    props.class,
  )
})
</script>

<template>
  <DefinePopup>
    <DrawerPrimitive.Portal v-bind="props.portalProps">
      <DrawerBackdrop />
      <DrawerViewport :position="position" :variant="props.variant">
        <DrawerPrimitive.Popup v-bind="$attrs" data-slot="drawer-popup" :class="popupClass">
          <slot />
          <DrawerPrimitive.Close v-if="props.showCloseButton">
            <template #render="{ props: closeAttrs }">
              <Button
                v-bind="closeAttrs"
                aria-label="Close"
                class="absolute end-2 top-2 z-1"
                size="icon"
                variant="ghost"
              >
                <XIcon />
              </Button>
            </template>
          </DrawerPrimitive.Close>
          <DrawerBar v-if="props.showBar" />
        </DrawerPrimitive.Popup>
      </DrawerViewport>
    </DrawerPrimitive.Portal>
  </DefinePopup>
  <DrawerPrimitive.VirtualKeyboardProvider v-if="position === 'bottom'">
    <ReusePopup />
  </DrawerPrimitive.VirtualKeyboardProvider>
  <ReusePopup v-else />
</template>
