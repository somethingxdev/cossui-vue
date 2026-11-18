<script setup lang="ts">
import type { ContextMenuTriggerProps } from '@vase-ui/vue/context-menu'
import { ContextMenu as ContextMenuPrimitive } from '@vase-ui/vue/context-menu'

interface Props extends /* @vue-ignore */ ContextMenuTriggerProps {}

defineProps<Props>()
</script>

<template>
  <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger">
    <slot />
  </ContextMenuPrimitive.Trigger>
</template>
