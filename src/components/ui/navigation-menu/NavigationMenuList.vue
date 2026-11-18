<script setup lang="ts">
import type { NavigationMenuListProps } from '@vase-ui/vue/navigation-menu'
import type { HTMLAttributes } from 'vue'
import { NavigationMenu as NavigationMenuPrimitive } from '@vase-ui/vue/navigation-menu'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ NavigationMenuListProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <NavigationMenuPrimitive.List
    :class="cn('flex items-center gap-1', props.class)"
    data-slot="navigation-menu-list"
  >
    <slot />
  </NavigationMenuPrimitive.List>
</template>
