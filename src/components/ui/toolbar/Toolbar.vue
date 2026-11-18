<script setup lang="ts">
import type { ToolbarRootProps } from '@vase-ui/vue/toolbar'
import type { HTMLAttributes } from 'vue'
import { Toolbar as ToolbarPrimitive } from '@vase-ui/vue/toolbar'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ToolbarRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.Root
    :class="cn('relative flex gap-2 rounded-xl border bg-card not-dark:bg-clip-padding p-1 text-card-foreground', props.class)"
    data-slot="toolbar"
  >
    <slot />
  </ToolbarPrimitive.Root>
</template>
