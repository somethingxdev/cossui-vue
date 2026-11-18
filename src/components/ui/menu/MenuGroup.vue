<script setup lang="ts">
import type { MenuGroupProps } from '@vase-ui/vue/menu'
import { Menu as MenuPrimitive } from '@vase-ui/vue/menu'

interface Props extends /* @vue-ignore */ MenuGroupProps {}

defineProps<Props>()
</script>

<template>
  <MenuPrimitive.Group data-slot="menu-group">
    <slot />
  </MenuPrimitive.Group>
</template>
