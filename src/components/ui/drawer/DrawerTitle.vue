<script setup lang="ts">
import type { DrawerTitleProps } from '@vase-ui/vue/drawer'
import type { HTMLAttributes } from 'vue'
import { Drawer as DrawerPrimitive } from '@vase-ui/vue/drawer'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ DrawerTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DrawerPrimitive.Title
    data-slot="drawer-title"
    :class="cn('font-bold font-heading text-xl leading-none', props.class)"
  >
    <slot />
  </DrawerPrimitive.Title>
</template>
