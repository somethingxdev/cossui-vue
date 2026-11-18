<script setup lang="ts">
import type { ToastPosition } from './manager'
import * as ToastPrimitive from '@ui-sdk/vue/toast'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'
import { toaster, upsertReplayClassName } from './manager'
import ToastBody from './ToastBody.vue'

const props = defineProps<{
  position: ToastPosition
}>()

const side = computed(() => props.position.startsWith('top')
  ? 'top'
  : 'bottom')

const align = computed(() => {
  if (props.position.includes('center'))
    return 'center'
  return props.position.includes('left')
    ? 'start'
    : 'end'
})

// The region is a popover in the top layer: reset the browser's popover box before placing it.
const regionClass = cn(
  'fixed inset-auto z-60 m-0 w-[calc(100%-var(--toast-inset)*2)] max-w-90 overflow-visible border-0 bg-transparent p-0 [--toast-inset:--spacing(4)] sm:[--toast-inset:--spacing(8)]',
  'data-[position*=top]:top-(--toast-inset)',
  'data-[position*=bottom]:bottom-(--toast-inset)',
  'data-[position*=left]:left-(--toast-inset)',
  'data-[position*=right]:right-(--toast-inset)',
  'data-[position*=center]:left-1/2 data-[position*=center]:-translate-x-1/2',
)

const toastClass = cn(
  'absolute z-[calc(9999-var(--toast-index))] h-(--toast-calc-height) w-full select-none rounded-lg border bg-[color-mix(in_srgb,var(--popover),var(--color-black)_calc(1%*max(0,var(--toast-index,0))))] not-dark:bg-clip-padding text-popover-foreground shadow-lg/5 [transition:transform_.5s_cubic-bezier(.22,1,.36,1),opacity_.5s,height_.15s,background-color_.5s] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-expanded:bg-popover dark:bg-[color-mix(in_srgb,var(--popover),var(--color-black)_calc(6%*max(0,var(--toast-index,0))))] dark:data-expanded:bg-popover dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
  'data-[position*=right]:right-0 data-[position*=right]:left-auto',
  'data-[position*=left]:right-auto data-[position*=left]:left-0',
  'data-[position*=center]:right-0 data-[position*=center]:left-0',
  'data-[position*=top]:top-0 data-[position*=top]:bottom-auto data-[position*=top]:origin-[50%_calc(50%-50%*min(var(--toast-index,0),1))]',
  'data-[position*=bottom]:top-auto data-[position*=bottom]:bottom-0 data-[position*=bottom]:origin-[50%_calc(50%+50%*min(var(--toast-index,0),1))]',
  'after:absolute after:left-0 after:h-[calc(var(--toast-gap)+1px)] after:w-full',
  'data-[position*=top]:after:top-full',
  'data-[position*=bottom]:after:bottom-full',
  '[--toast-calc-height:var(--toast-front-height,var(--toast-height))] [--toast-gap:--spacing(3)] [--toast-peek:--spacing(3)] [--toast-scale:calc(max(0,1-(var(--toast-index)*.1)))] [--toast-shrink:calc(1-var(--toast-scale))] [--toast-x:var(--toast-swipe-x,0px)] [--toast-y:var(--toast-swipe-y,0px)]',
  'data-[position*=top]:[--toast-calc-offset-y:calc(var(--toast-offset)+var(--toast-index)*var(--toast-gap)+var(--toast-y))]',
  'data-[position*=bottom]:[--toast-calc-offset-y:calc(var(--toast-offset)*-1+var(--toast-index)*var(--toast-gap)*-1+var(--toast-y))]',
  'data-[position*=top]:transform-[translateX(var(--toast-x))_translateY(calc(var(--toast-y)+(var(--toast-index)*var(--toast-peek))+(var(--toast-shrink)*var(--toast-calc-height))))_scale(var(--toast-scale))]',
  'data-[position*=bottom]:transform-[translateX(var(--toast-x))_translateY(calc(var(--toast-y)-(var(--toast-index)*var(--toast-peek))-(var(--toast-shrink)*var(--toast-calc-height))))_scale(var(--toast-scale))]',
  'data-expanded:h-(--toast-height)',
  'data-position:data-expanded:transform-[translateX(var(--toast-x))_translateY(var(--toast-calc-offset-y))]',
  'data-swiping:transition-none',
  'motion-safe:data-[position*=top]:data-starting-style:transform-[translateY(calc(-100%-var(--toast-inset)))]',
  'motion-safe:data-[position*=bottom]:data-starting-style:transform-[translateY(calc(100%+var(--toast-inset)))]',
  'data-ending-style:opacity-0',
  'motion-reduce:data-starting-style:opacity-0 motion-reduce:[transition:opacity_.5s,height_.15s,background-color_.5s]',
  'motion-safe:data-[position*=top]:data-ending-style:not-data-swipe-direction:transform-[translateY(calc(-100%-var(--toast-inset)))]',
  'motion-safe:data-[position*=bottom]:data-ending-style:not-data-swipe-direction:transform-[translateY(calc(100%+var(--toast-inset)))]',
  'data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-x)-100%-var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]',
  'data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-x)+100%+var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]',
  'data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-y)-100%-var(--toast-inset)))]',
  'data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-y)+100%+var(--toast-inset)))]',
  'data-expanded:data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-x)-100%-var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]',
  'data-expanded:data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-x)+100%+var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]',
  'data-expanded:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-y)-100%-var(--toast-inset)))]',
  'data-expanded:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-y)+100%+var(--toast-inset)))]',
)
</script>

<template>
  <ToastPrimitive.ToastRegion
    :align="align"
    :class="regionClass"
    :data-position="props.position"
    :side="side"
    :toaster="toaster"
  >
    <template #default="{ toast }">
      <ToastPrimitive.Toast :class="[toastClass, upsertReplayClassName(toast)]" :data-position="props.position">
        <div
          class="pointer-events-auto flex items-center justify-between gap-1.5 overflow-hidden px-3.5 py-3 text-sm transition-opacity duration-250 in-[[data-slot=toast]:not([data-front],[data-expanded])]:pointer-events-none in-[[data-slot=toast]:not([data-front],[data-expanded])]:opacity-0"
          data-slot="toast-content"
        >
          <ToastBody :type="toast.type" />
        </div>
      </ToastPrimitive.Toast>
    </template>
  </ToastPrimitive.ToastRegion>
</template>
