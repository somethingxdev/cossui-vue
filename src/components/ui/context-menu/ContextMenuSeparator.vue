<script setup lang="ts">
import type { ContextMenuSeparatorProps } from '@vase-ui/vue/context-menu'
import type { HTMLAttributes } from 'vue'
import { ContextMenu as ContextMenuPrimitive } from '@vase-ui/vue/context-menu'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ContextMenuSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ContextMenuPrimitive.Separator
    :class="cn('mx-2 my-1 h-px bg-border', props.class)"
    data-slot="context-menu-separator"
  />
</template>
