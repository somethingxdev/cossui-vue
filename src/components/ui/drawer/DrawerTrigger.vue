<script setup lang="ts">
import type { DrawerTriggerProps } from '@vase-ui/vue/drawer'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'

interface Props extends /* @vue-ignore */ DrawerTriggerProps {}

defineProps<Props>()
</script>

<template>
  <DrawerPrimitive.Trigger data-slot="drawer-trigger">
    <slot />
  </DrawerPrimitive.Trigger>
</template>
