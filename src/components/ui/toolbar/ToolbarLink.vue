<script setup lang="ts">
import type { ToolbarLinkProps } from '@vase-ui/vue/toolbar'
import { Toolbar as ToolbarPrimitive } from '@vase-ui/vue/toolbar'

interface Props extends /* @vue-ignore */ ToolbarLinkProps {}

defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.Link data-slot="toolbar-link">
    <slot />
  </ToolbarPrimitive.Link>
</template>
