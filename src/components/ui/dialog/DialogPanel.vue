<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import { ScrollArea } from '../scroll-area'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  scrollFade?: boolean
  class?: HTMLAttributes['class']
}>(), {
  scrollFade: true,
})
</script>

<template>
  <ScrollArea overscroll-contain :scroll-fade="props.scrollFade">
    <div
      v-bind="$attrs"
      data-slot="dialog-panel"
      :class="cn(
        'p-6 in-[[data-slot=dialog-content]:has([data-slot=dialog-header])]:pt-1 in-[[data-slot=dialog-content]:has([data-slot=dialog-footer]:not(.border-t))]:pb-1',
        props.class,
      )"
    >
      <slot />
    </div>
  </ScrollArea>
</template>
