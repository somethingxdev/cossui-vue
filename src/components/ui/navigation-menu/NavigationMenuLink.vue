<script setup lang="ts">
import type { NavigationMenuLinkProps } from '@vase-ui/vue/navigation-menu'
import type { HTMLAttributes } from 'vue'
import { NavigationMenu as NavigationMenuPrimitive } from '@vase-ui/vue/navigation-menu'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ NavigationMenuLinkProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <NavigationMenuPrimitive.Link
    :class="cn(
      `flex min-h-8 select-none items-center gap-2 rounded-sm px-2 py-1 text-base text-foreground outline-none hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground sm:min-h-7 sm:text-sm [&>svg:not([class*='opacity-'])]:opacity-80 [&>svg:not([class*='size-'])]:size-4.5 sm:[&>svg:not([class*='size-'])]:size-4 [&>svg]:pointer-events-none [&>svg]:-mx-0.5 [&>svg]:shrink-0`,
      props.class,
    )"
    data-slot="navigation-menu-link"
  >
    <slot />
  </NavigationMenuPrimitive.Link>
</template>
