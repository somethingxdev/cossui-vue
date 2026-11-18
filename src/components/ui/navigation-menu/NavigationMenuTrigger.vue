<script setup lang="ts">
import type { NavigationMenuTriggerProps } from '@vase-ui/vue/navigation-menu'
import type { HTMLAttributes } from 'vue'
import { ChevronDownIcon } from '@lucide/vue'
import { NavigationMenu as NavigationMenuPrimitive } from '@vase-ui/vue/navigation-menu'
import { cn } from '../../../lib/utils'
import { buttonVariants } from '../button'

interface Props extends /* @vue-ignore */ NavigationMenuTriggerProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <NavigationMenuPrimitive.Trigger
    :class="cn(buttonVariants({ variant: 'ghost' }), 'data-popup-open:bg-accent data-disabled:pointer-events-none data-disabled:opacity-64', props.class)"
    data-slot="navigation-menu-trigger"
  >
    <slot />
    <NavigationMenuPrimitive.Icon
      class="flex transition-transform duration-200 data-popup-open:rotate-180"
      data-slot="navigation-menu-icon"
    >
      <ChevronDownIcon />
    </NavigationMenuPrimitive.Icon>
  </NavigationMenuPrimitive.Trigger>
</template>
