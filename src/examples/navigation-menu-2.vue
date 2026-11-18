<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { buttonVariants } from '../components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../components/ui/navigation-menu'

const links = [
  { to: '/docs/components/button', label: 'Button' },
  { to: '/docs/components/card', label: 'Card' },
  { to: '/docs/components/tabs', label: 'Tabs' },
]
</script>

<template>
  <NavigationMenu aria-label="Components">
    <NavigationMenuList>
      <NavigationMenuItem v-for="link in links" :key="link.to">
        <NavigationMenuLink
          :as="RouterLink"
          :class="buttonVariants({ variant: 'ghost' })"
          :to="link.to"
        >
          {{ link.label }}
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
