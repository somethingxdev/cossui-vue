<script setup lang="ts">
import type { DrawerDescriptionProps } from '@vase-ui/vue/drawer'
import type { HTMLAttributes } from 'vue'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ DrawerDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DrawerPrimitive.Description
    data-slot="drawer-description"
    :class="cn('text-muted-foreground text-sm', props.class)"
  >
    <slot />
  </DrawerPrimitive.Description>
</template>
