<script setup lang="ts">
import type { ToastPortalProps } from '@vase-ui/vue/toast'
import type { ToastData, ToastPosition } from './manager'
import { Toast as ToastPrimitive } from '@vase-ui/vue/toast'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'
import { upsertReplayClassName } from './manager'
import ToastBody from './ToastBody.vue'

const props = defineProps<{
  position: ToastPosition
  portalProps?: ToastPortalProps
}>()

type SwipeDirection = 'up' | 'down' | 'left' | 'right'

const { toasts } = ToastPrimitive.useToastManager<ToastData>()

const swipeDirection = computed<SwipeDirection[]>(() => {
  const vertical: SwipeDirection = props.position.startsWith('top')
    ? 'up'
    : 'down'
  if (props.position.includes('center'))
    return [vertical]
  return [
    props.position.includes('left')
      ? 'left'
      : 'right',
    vertical,
  ]
})

const viewportClass = cn(
  'fixed z-60 mx-auto flex w-[calc(100%-var(--toast-inset)*2)] max-w-90 [--toast-inset:--spacing(4)] sm:[--toast-inset:--spacing(8)]',
  'data-[position*=top]:top-(--toast-inset)',
  'data-[position*=bottom]:bottom-(--toast-inset)',
  'data-[position*=left]:left-(--toast-inset)',
  'data-[position*=right]:right-(--toast-inset)',
  'data-[position*=center]:left-1/2 data-[position*=center]:-translate-x-1/2',
)

const rootClass = cn(
  'absolute z-[calc(9999-var(--toast-index))] h-(--toast-calc-height) w-full select-none rounded-lg border bg-[color-mix(in_srgb,var(--popover),var(--color-black)_calc(1%*max(0,var(--toast-index,0))))] not-dark:bg-clip-padding text-popover-foreground shadow-lg/5 [transition:transform_.5s_cubic-bezier(.22,1,.36,1),opacity_.5s,height_.15s,background-color_.5s] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-expanded:bg-popover dark:bg-[color-mix(in_srgb,var(--popover),var(--color-black)_calc(6%*max(0,var(--toast-index,0))))] dark:data-expanded:bg-popover dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
  'data-[position*=right]:right-0 data-[position*=right]:left-auto',
  'data-[position*=left]:right-auto data-[position*=left]:left-0',
  'data-[position*=center]:right-0 data-[position*=center]:left-0',
  'data-[position*=top]:top-0 data-[position*=top]:bottom-auto data-[position*=top]:origin-[50%_calc(50%-50%*min(var(--toast-index,0),1))]',
  'data-[position*=bottom]:top-auto data-[position*=bottom]:bottom-0 data-[position*=bottom]:origin-[50%_calc(50%+50%*min(var(--toast-index,0),1))]',
  'after:absolute after:left-0 after:h-[calc(var(--toast-gap)+1px)] after:w-full',
  'data-[position*=top]:after:top-full',
  'data-[position*=bottom]:after:bottom-full',
  '[--toast-calc-height:var(--toast-frontmost-height,var(--toast-height))] [--toast-gap:--spacing(3)] [--toast-peek:--spacing(3)] [--toast-scale:calc(max(0,1-(var(--toast-index)*.1)))] [--toast-shrink:calc(1-var(--toast-scale))]',
  'data-[position*=top]:[--toast-calc-offset-y:calc(var(--toast-offset-y)+var(--toast-index)*var(--toast-gap)+var(--toast-swipe-movement-y))]',
  'data-[position*=bottom]:[--toast-calc-offset-y:calc(var(--toast-offset-y)*-1+var(--toast-index)*var(--toast-gap)*-1+var(--toast-swipe-movement-y))]',
  'data-[position*=top]:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--toast-peek))+(var(--toast-shrink)*var(--toast-calc-height))))_scale(var(--toast-scale))]',
  'data-[position*=bottom]:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--toast-peek))-(var(--toast-shrink)*var(--toast-calc-height))))_scale(var(--toast-scale))]',
  'data-limited:opacity-0',
  'data-expanded:h-(--toast-height)',
  'data-position:data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(var(--toast-calc-offset-y))]',
  'motion-safe:data-[position*=top]:data-starting-style:transform-[translateY(calc(-100%-var(--toast-inset)))]',
  'motion-safe:data-[position*=bottom]:data-starting-style:transform-[translateY(calc(100%+var(--toast-inset)))]',
  'data-ending-style:opacity-0',
  'motion-reduce:data-starting-style:opacity-0 motion-reduce:[transition:opacity_.5s,height_.15s,background-color_.5s]',
  'motion-safe:data-[position*=top]:data-ending-style:not-data-limited:not-data-swipe-direction:transform-[translateY(calc(-100%-var(--toast-inset)))]',
  'motion-safe:data-[position*=bottom]:data-ending-style:not-data-limited:not-data-swipe-direction:transform-[translateY(calc(100%+var(--toast-inset)))]',
  'data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-100%-var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]',
  'data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+100%+var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]',
  'data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-100%-var(--toast-inset)))]',
  'data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+100%+var(--toast-inset)))]',
  'data-expanded:data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-100%-var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]',
  'data-expanded:data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+100%+var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]',
  'data-expanded:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-100%-var(--toast-inset)))]',
  'data-expanded:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+100%+var(--toast-inset)))]',
)
</script>

<template>
  <ToastPrimitive.Portal data-slot="toast-portal" v-bind="props.portalProps">
    <ToastPrimitive.Viewport
      :class="viewportClass"
      :data-position="props.position"
      data-slot="toast-viewport"
    >
      <ToastPrimitive.Root
        v-for="toast in toasts"
        :key="toast.id"
        :class="[rootClass, upsertReplayClassName(toast)]"
        v-bind="toast.data?.rootProps"
        :data-position="props.position"
        :swipe-direction="swipeDirection"
        :toast="toast"
      >
        <ToastPrimitive.Content class="pointer-events-auto flex items-center justify-between gap-1.5 overflow-hidden px-3.5 py-3 text-sm transition-opacity duration-250 data-behind:not-data-expanded:pointer-events-none data-behind:opacity-0 data-expanded:opacity-100">
          <ToastBody :type="toast.type" />
        </ToastPrimitive.Content>
      </ToastPrimitive.Root>
    </ToastPrimitive.Viewport>
  </ToastPrimitive.Portal>
</template>
