<script setup lang="ts">
import type { ResizableHandleProps } from '@vase-ui/vue/resizable'
import type { HTMLAttributes } from 'vue'
import { GripVerticalIcon } from '@lucide/vue'
import { Resizable as ResizablePrimitive } from '@vase-ui/vue/resizable'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ResizableHandleProps {
  withHandle?: boolean
  class?: HTMLAttributes['class']
}

// The 1px line needs no wider pseudo-element: Vase UI renders a hit area in the handle (`hitAreaSize` of the root).
const props = defineProps<Props>()
</script>

<template>
  <ResizablePrimitive.Handle
    :class="cn(
      'group/resizable-handle flex shrink-0 items-center justify-center bg-border outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background data-[orientation=horizontal]:w-px data-[orientation=vertical]:h-px data-[orientation=horizontal]:cursor-col-resize data-[orientation=vertical]:cursor-row-resize data-disabled:cursor-default',
      props.class,
    )"
    data-slot="resizable-handle"
  >
    <div
      v-if="props.withHandle"
      class="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border group-data-[orientation=vertical]/resizable-handle:rotate-90"
      data-slot="resizable-handle-grip"
    >
      <GripVerticalIcon class="size-2.5" />
    </div>
  </ResizablePrimitive.Handle>
</template>
