<script setup lang="ts">
import type { NavigationMenuItemProps } from '@vase-ui/vue/navigation-menu'
import { NavigationMenu as NavigationMenuPrimitive } from '@vase-ui/vue/navigation-menu'

interface Props extends /* @vue-ignore */ NavigationMenuItemProps {}

defineProps<Props>()
</script>

<template>
  <NavigationMenuPrimitive.Item data-slot="navigation-menu-item">
    <slot />
  </NavigationMenuPrimitive.Item>
</template>
