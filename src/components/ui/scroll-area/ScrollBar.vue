<script setup lang="ts">
import type { ScrollAreaScrollbarProps } from '@vase-ui/vue/scroll-area'
import type { HTMLAttributes } from 'vue'
import { ScrollArea as ScrollAreaPrimitive } from '@vase-ui/vue/scroll-area'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ScrollAreaScrollbarProps {
  orientation?: ScrollAreaScrollbarProps['orientation']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'vertical',
})
</script>

<template>
  <ScrollAreaPrimitive.Scrollbar
    data-slot="scroll-area-scrollbar"
    :orientation="props.orientation"
    :class="cn(
      'm-1 flex opacity-0 transition-opacity delay-300 data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5 data-[orientation=horizontal]:flex-col data-hovering:opacity-100 data-scrolling:opacity-100 data-hovering:delay-0 data-scrolling:delay-0 data-hovering:duration-100 data-scrolling:duration-100',
      props.class,
    )"
  >
    <ScrollAreaPrimitive.Thumb
      class="relative flex-1 rounded-full bg-foreground/20"
      data-slot="scroll-area-thumb"
    />
  </ScrollAreaPrimitive.Scrollbar>
</template>
