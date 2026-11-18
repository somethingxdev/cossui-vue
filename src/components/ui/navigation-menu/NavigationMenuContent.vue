<script setup lang="ts">
import type { NavigationMenuContentProps } from '@vase-ui/vue/navigation-menu'
import type { HTMLAttributes } from 'vue'
import { NavigationMenu as NavigationMenuPrimitive } from '@vase-ui/vue/navigation-menu'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ NavigationMenuContentProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <NavigationMenuPrimitive.Content
    :class="cn(
      'h-full w-max p-1 transition-[opacity,translate] duration-(--duration) ease-(--easing) data-ending-style:opacity-0 data-starting-style:opacity-0 data-starting-style:data-[activation-direction=left]:-translate-x-1/2 data-starting-style:data-[activation-direction=right]:translate-x-1/2 data-ending-style:data-[activation-direction=left]:translate-x-1/2 data-ending-style:data-[activation-direction=right]:-translate-x-1/2',
      props.class,
    )"
    data-slot="navigation-menu-content"
  >
    <slot />
  </NavigationMenuPrimitive.Content>
</template>
