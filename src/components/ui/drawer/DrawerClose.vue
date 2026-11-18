<script setup lang="ts">
import type { DrawerCloseProps } from '@vase-ui/vue/drawer'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'

interface Props extends /* @vue-ignore */ DrawerCloseProps {}

defineProps<Props>()
</script>

<template>
  <DrawerPrimitive.Close data-slot="drawer-close">
    <slot />
  </DrawerPrimitive.Close>
</template>
