<script setup lang="ts">
import type { DrawerRootProps } from '@vase-ui/vue/drawer'
import type { DrawerPosition } from './context'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'
import { provide } from 'vue'
import { directionMap, drawerPositionKey } from './context'

interface Props extends /* @vue-ignore */ DrawerRootProps {
  swipeDirection?: DrawerRootProps['swipeDirection']
  position?: DrawerPosition
}

const props = withDefaults(defineProps<Props>(), {
  position: 'bottom',
})

defineSlots<{
  default?: (props: { payload: unknown }) => unknown
}>()

provide(drawerPositionKey, () => props.position)
</script>

<template>
  <DrawerPrimitive.Root
    v-slot="{ payload }"
    :swipe-direction="props.swipeDirection ?? directionMap[props.position]"
  >
    <slot :payload="payload" />
  </DrawerPrimitive.Root>
</template>
