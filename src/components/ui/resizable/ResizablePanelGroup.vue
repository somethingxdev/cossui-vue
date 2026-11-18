<script setup lang="ts">
import type { ResizableRootProps } from '@vase-ui/vue/resizable'
import type { HTMLAttributes } from 'vue'
import { Resizable as ResizablePrimitive } from '@vase-ui/vue/resizable'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ResizableRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ResizablePrimitive.Root
    :class="cn('h-full w-full', props.class)"
    data-slot="resizable-panel-group"
  >
    <slot />
  </ResizablePrimitive.Root>
</template>
