<script setup lang="ts">
import type { ToolbarButtonProps } from '@vase-ui/vue/toolbar'
import { Toolbar as ToolbarPrimitive } from '@vase-ui/vue/toolbar'

interface Props extends /* @vue-ignore */ ToolbarButtonProps {}

defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.Button data-slot="toolbar-button">
    <slot />
  </ToolbarPrimitive.Button>
</template>
