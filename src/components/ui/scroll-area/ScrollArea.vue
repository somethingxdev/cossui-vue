<script setup lang="ts">
import type { ScrollAreaRootProps } from '@vase-ui/vue/scroll-area'
import type { HTMLAttributes } from 'vue'
import { ScrollArea as ScrollAreaPrimitive } from '@vase-ui/vue/scroll-area'
import { cn } from '../../../lib/utils'
import ScrollBar from './ScrollBar.vue'

interface Props extends /* @vue-ignore */ ScrollAreaRootProps {
  scrollFade?: boolean
  scrollbarGutter?: boolean
  fill?: boolean
  clampContentMinWidth?: boolean
  overscrollContain?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  clampContentMinWidth: true,
})
</script>

<template>
  <ScrollAreaPrimitive.Root :class="cn('size-full min-h-0', props.class)">
    <ScrollAreaPrimitive.Viewport
      data-slot="scroll-area-viewport"
      :class="cn(
        'h-full rounded-[inherit] outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
        props.overscrollContain && 'data-has-overflow-y:overscroll-y-contain data-has-overflow-x:overscroll-x-contain',
        props.scrollFade && 'mask-t-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-start)))] mask-b-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-end)))] mask-l-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-start)))] mask-r-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-end)))] [--fade-size:1.5rem]',
        props.scrollbarGutter && 'data-has-overflow-y:pe-2.5 data-has-overflow-x:pb-2.5',
      )"
    >
      <ScrollAreaPrimitive.Content
        data-slot="scroll-area-content"
        :class="cn(props.fill && 'size-full')"
        :style="props.clampContentMinWidth ? { minWidth: 0 } : undefined"
      >
        <slot />
      </ScrollAreaPrimitive.Content>
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar orientation="vertical" />
    <ScrollBar orientation="horizontal" />
    <ScrollAreaPrimitive.Corner data-slot="scroll-area-corner" />
  </ScrollAreaPrimitive.Root>
</template>
