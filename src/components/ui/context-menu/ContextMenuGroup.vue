<script setup lang="ts">
import type { ContextMenuGroupProps } from '@vase-ui/vue/context-menu'
import { ContextMenu as ContextMenuPrimitive } from '@vase-ui/vue/context-menu'

interface Props extends /* @vue-ignore */ ContextMenuGroupProps {}

defineProps<Props>()
</script>

<template>
  <ContextMenuPrimitive.Group data-slot="context-menu-group">
    <slot />
  </ContextMenuPrimitive.Group>
</template>
