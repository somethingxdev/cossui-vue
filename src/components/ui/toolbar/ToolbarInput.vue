<script setup lang="ts">
import type { ToolbarInputProps } from '@vase-ui/vue/toolbar'
import { Toolbar as ToolbarPrimitive } from '@vase-ui/vue/toolbar'

interface Props extends /* @vue-ignore */ ToolbarInputProps {}

defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.Input data-slot="toolbar-input" />
</template>
