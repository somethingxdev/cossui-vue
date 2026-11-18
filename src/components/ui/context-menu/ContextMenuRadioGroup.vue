<script setup lang="ts">
import type { ContextMenuRadioGroupProps } from '@vase-ui/vue/context-menu'
import { ContextMenu as ContextMenuPrimitive } from '@vase-ui/vue/context-menu'

interface Props extends /* @vue-ignore */ ContextMenuRadioGroupProps {}

defineProps<Props>()
</script>

<template>
  <ContextMenuPrimitive.RadioGroup data-slot="context-menu-radio-group">
    <slot />
  </ContextMenuPrimitive.RadioGroup>
</template>
