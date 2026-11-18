<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { DrawerPosition } from './context'
import { XIcon } from '@lucide/vue'
import * as DrawerPrimitive from '@ui-sdk/vue/drawer'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import { useDrawerPosition } from './context'
import DrawerBackdrop from './DrawerBackdrop.vue'
import DrawerBar from './DrawerBar.vue'

type DrawerContentProps = InstanceType<typeof DrawerPrimitive.DrawerContent>['$props']

interface Props extends /* @vue-ignore */ DrawerContentProps {
  showCloseButton?: boolean
  position?: DrawerPosition
  variant?: 'default' | 'straight' | 'inset'
  showBar?: boolean
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const position = useDrawerPosition(() => props.position)

const popupClass = computed(() => {
  const p = position.value
  return cn(
    'relative mx-(--inset) flex min-h-0 min-w-0 flex-col bg-[color-mix(in_srgb,var(--popover),var(--color-black)_calc(2%*var(--drawer-stack,0)))] not-dark:bg-clip-padding text-popover-foreground shadow-lg/5 outline-none transition-[box-shadow,background-color] duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] [--bleed:--spacing(12)] [--inset:0px] [--peek:calc(var(--drawer-stack,0)*(--spacing(6)-1px))] before:pointer-events-none before:absolute before:inset-0 before:shadow-[0_1px_--theme(--color-black/4%)] after:pointer-events-none after:absolute after:bg-popover data-dragging:select-none data-ending-style:shadow-transparent data-starting-style:shadow-transparent dark:bg-[color-mix(in_srgb,var(--popover),var(--color-black)_calc(6%*var(--drawer-stack,0)))] dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
    p === 'bottom' && 'origin-top transform-[translateY(calc(var(--peek)*-1))] mb-(--inset) max-h-[calc(100%-max(--spacing(2),env(safe-area-inset-top,0px))-var(--inset))] w-[calc(100%-2*var(--inset))] border-t after:inset-x-0 after:top-full after:h-(--bleed) has-data-[slot=drawer-bar]:pt-2',
    p === 'top' && 'origin-bottom transform-[translateY(var(--peek))] mt-(--inset) max-h-[calc(100%-(--spacing(12))-var(--inset))] w-[calc(100%-2*var(--inset))] border-b after:inset-x-0 after:bottom-full after:h-(--bleed) has-data-[slot=drawer-bar]:pb-2',
    p === 'left' && 'origin-right transform-[translateX(var(--peek))] my-(--inset) w-[calc(100%-(--spacing(12)))] max-w-md border-e after:inset-y-0 after:end-full after:w-(--bleed) has-data-[slot=drawer-bar]:pe-2',
    p === 'right' && 'origin-left transform-[translateX(calc(var(--peek)*-1))] my-(--inset) w-[calc(100%-(--spacing(12)))] max-w-md border-s after:inset-y-0 after:start-full after:w-(--bleed) has-data-[slot=drawer-bar]:ps-2',
    // A drawer with nested drawers open above it steps back: --drawer-stack counts them.
    props.variant !== 'straight' && 'scale-[calc(1-var(--drawer-stack,0)*0.05)]',
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
    props.variant === 'inset' && 'before:hidden sm:rounded-2xl sm:[--inset:--spacing(4)] sm:border sm:after:bg-transparent sm:before:rounded-[calc(var(--radius-2xl)-1px)] sm:**:data-[slot=drawer-footer]:rounded-b-[calc(var(--radius-2xl)-1px)]',
    (p === 'bottom' || p === 'top') && 'h-(--drawer-height,auto)',
    props.class,
  )
})
</script>

<template>
  <DrawerBackdrop />
  <!-- The drawer owns the viewport and the content's translate, so the gaps coss ui kept as viewport padding are margins here. -->
  <DrawerPrimitive.DrawerContent v-bind="$attrs" :class="popupClass">
    <slot />
    <DrawerPrimitive.DrawerClose v-if="props.showCloseButton">
      <template #render="{ props: part }">
        <Button
          v-bind="part"
          aria-label="Close"
          class="absolute end-2 top-2 z-1"
          size="icon"
          variant="ghost"
        >
          <XIcon />
        </Button>
      </template>
    </DrawerPrimitive.DrawerClose>
    <DrawerBar v-if="props.showBar" />
  </DrawerPrimitive.DrawerContent>
</template>
