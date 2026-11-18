<script setup lang="ts">
import type { SelectPopupProps, SelectPortalProps, SelectPositionerProps } from '@vase-ui/vue/select'
import type { HTMLAttributes } from 'vue'
import { ChevronDownIcon, ChevronUpIcon } from '@lucide/vue'
import { Select as SelectPrimitive } from '@vase-ui/vue/select'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ SelectPopupProps {
  portalProps?: SelectPortalProps
  side?: SelectPositionerProps['side']
  sideOffset?: SelectPositionerProps['sideOffset']
  align?: SelectPositionerProps['align']
  alignOffset?: SelectPositionerProps['alignOffset']
  alignItemWithTrigger?: SelectPositionerProps['alignItemWithTrigger']
  anchor?: SelectPositionerProps['anchor']
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
  sideOffset: 4,
  align: 'start',
  alignOffset: 0,
  alignItemWithTrigger: true,
})
</script>

<template>
  <SelectPrimitive.Portal v-bind="props.portalProps">
    <SelectPrimitive.Positioner
      data-slot="select-positioner"
      class="z-50 select-none"
      :align="props.align"
      :align-item-with-trigger="props.alignItemWithTrigger"
      :align-offset="props.alignOffset"
      :anchor="props.anchor"
      :side="props.side"
      :side-offset="props.sideOffset"
    >
      <SelectPrimitive.Popup
        v-bind="$attrs"
        data-slot="select-popup"
        class="origin-(--transform-origin) text-foreground outline-none"
      >
        <SelectPrimitive.ScrollUpArrow
          data-slot="select-scroll-up-arrow"
          class="top-0 z-50 flex h-6 w-full cursor-default items-center justify-center before:pointer-events-none before:absolute before:inset-x-px before:top-px before:h-[200%] before:rounded-t-[calc(var(--radius-lg)-1px)] before:bg-linear-to-b before:from-50% before:from-popover"
        >
          <ChevronUpIcon class="relative size-4.5 sm:size-4" />
        </SelectPrimitive.ScrollUpArrow>
        <div class="relative h-full min-w-(--anchor-width) rounded-lg border bg-popover not-dark:bg-clip-padding shadow-lg/5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/6%)]">
          <SelectPrimitive.List
            data-slot="select-list"
            :class="cn('max-h-(--available-height) overflow-y-auto p-1', props.class)"
          >
            <slot />
          </SelectPrimitive.List>
        </div>
        <SelectPrimitive.ScrollDownArrow
          data-slot="select-scroll-down-arrow"
          class="bottom-0 z-50 flex h-6 w-full cursor-default items-center justify-center before:pointer-events-none before:absolute before:inset-x-px before:bottom-px before:h-[200%] before:rounded-b-[calc(var(--radius-lg)-1px)] before:bg-linear-to-t before:from-50% before:from-popover"
        >
          <ChevronDownIcon class="relative size-4.5 sm:size-4" />
        </SelectPrimitive.ScrollDownArrow>
      </SelectPrimitive.Popup>
    </SelectPrimitive.Positioner>
  </SelectPrimitive.Portal>
</template>
