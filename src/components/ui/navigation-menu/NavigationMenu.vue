<script setup lang="ts">
import type { NavigationMenuRootProps } from '@vase-ui/vue/navigation-menu'
import { NavigationMenu as NavigationMenuPrimitive } from '@vase-ui/vue/navigation-menu'

interface Props extends /* @vue-ignore */ NavigationMenuRootProps {}

defineProps<Props>()
</script>

<template>
  <NavigationMenuPrimitive.Root data-slot="navigation-menu">
    <slot />
  </NavigationMenuPrimitive.Root>
</template>
