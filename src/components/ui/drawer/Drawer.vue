<script setup lang="ts">
import type { DrawerPosition } from './context'
import * as DrawerPrimitive from '@ui-sdk/vue/drawer'
import { provide } from 'vue'
import { drawerPositionKey } from './context'

type DrawerProps = InstanceType<typeof DrawerPrimitive.Drawer>['$props']

interface Props extends /* @vue-ignore */ DrawerProps {
  position?: DrawerPosition
}

const props = withDefaults(defineProps<Props>(), {
  position: 'bottom',
})

provide(drawerPositionKey, () => props.position)
</script>

<template>
  <DrawerPrimitive.Drawer :side="props.position">
    <slot />
  </DrawerPrimitive.Drawer>
</template>
