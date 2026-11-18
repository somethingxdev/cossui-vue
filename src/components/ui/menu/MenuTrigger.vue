<script setup lang="ts">
import type { MenuTriggerProps } from '@vase-ui/vue/menu'
import { Menu as MenuPrimitive } from '@vase-ui/vue/menu'

interface Props extends /* @vue-ignore */ MenuTriggerProps {}

defineProps<Props>()
</script>

<template>
  <MenuPrimitive.Trigger data-slot="menu-trigger">
    <slot />
  </MenuPrimitive.Trigger>
</template>
