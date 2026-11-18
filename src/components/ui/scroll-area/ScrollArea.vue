<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as ScrollAreaPrimitive from '@ui-sdk/vue/scroll-area'
import { cn } from '../../../lib/utils'
import ScrollBar from './ScrollBar.vue'

type ScrollAreaRootProps = InstanceType<typeof ScrollAreaPrimitive.ScrollArea>['$props']

interface Props extends /* @vue-ignore */ ScrollAreaRootProps {
  scrollFade?: boolean
  scrollbarGutter?: boolean
  fill?: boolean
  clampContentMinWidth?: boolean
  overscrollContain?: boolean
  class?: HTMLAttributes['class']
}

// UI SDK documents `data-overflow-x` and the overflow variables on the root only, hence the parent selector and
// `inherit`. The content part sets `min-width: fit-content` inline, hence `min-w-0!`.
const props = withDefaults(defineProps<Props>(), {
  clampContentMinWidth: true,
})
</script>

<template>
  <ScrollAreaPrimitive.ScrollArea :class="cn('size-full min-h-0', props.class)">
    <ScrollAreaPrimitive.ScrollAreaViewport
      :class="cn(
        'h-full rounded-[inherit] outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
        props.overscrollContain && 'data-overflow-y:overscroll-y-contain [[data-overflow-x]>&]:overscroll-x-contain',
        props.scrollFade && 'mask-t-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-start)))] mask-b-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-end)))] mask-l-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-start)))] mask-r-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-end)))] [--fade-size:1.5rem] [--scroll-area-overflow-y-start:inherit] [--scroll-area-overflow-y-end:inherit] [--scroll-area-overflow-x-start:inherit] [--scroll-area-overflow-x-end:inherit]',
        props.scrollbarGutter && 'data-overflow-y:pe-2.5 [[data-overflow-x]>&]:pb-2.5',
      )"
    >
      <ScrollAreaPrimitive.ScrollAreaContent
        :class="cn(props.fill && 'size-full', props.clampContentMinWidth && 'min-w-0!')"
      >
        <slot />
      </ScrollAreaPrimitive.ScrollAreaContent>
    </ScrollAreaPrimitive.ScrollAreaViewport>
    <ScrollBar orientation="vertical" />
    <ScrollBar orientation="horizontal" />
    <ScrollAreaPrimitive.ScrollAreaCorner />
  </ScrollAreaPrimitive.ScrollArea>
</template>
