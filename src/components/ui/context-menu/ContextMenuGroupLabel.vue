<script setup lang="ts">
import type { ContextMenuGroupLabelProps } from '@vase-ui/vue/context-menu'
import type { HTMLAttributes } from 'vue'
import { ContextMenu as ContextMenuPrimitive } from '@vase-ui/vue/context-menu'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ContextMenuGroupLabelProps {
  inset?: boolean
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ContextMenuPrimitive.GroupLabel
    :class="cn('px-2 py-1.5 font-medium text-muted-foreground text-xs data-inset:ps-9 sm:data-inset:ps-8', props.class)"
    :data-inset="props.inset || undefined"
    data-slot="context-menu-label"
  >
    <slot />
  </ContextMenuPrimitive.GroupLabel>
</template>
