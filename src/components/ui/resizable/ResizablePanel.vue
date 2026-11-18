<script setup lang="ts">
import type { ResizablePanelProps } from '@vase-ui/vue/resizable'
import type { HTMLAttributes } from 'vue'
import { Resizable as ResizablePrimitive } from '@vase-ui/vue/resizable'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ResizablePanelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ResizablePrimitive.Panel
    :class="cn('overflow-hidden', props.class)"
    data-slot="resizable-panel"
  >
    <slot />
  </ResizablePrimitive.Panel>
</template>
