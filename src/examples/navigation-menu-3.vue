<script setup lang="ts">
import { buttonVariants } from '../components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuTrigger,
} from '../components/ui/navigation-menu'

const guides = [
  { href: 'https://vase-ui.com/handbook/styling', title: 'Styling' },
  { href: 'https://vase-ui.com/handbook/animation', title: 'Animation' },
  { href: 'https://vase-ui.com/handbook/composition', title: 'Composition' },
]
</script>

<template>
  <NavigationMenu aria-label="Sidebar" orientation="vertical">
    <NavigationMenuList class="flex-col items-stretch">
      <NavigationMenuItem>
        <NavigationMenuTrigger class="justify-between">
          Handbook
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-48">
            <li v-for="guide in guides" :key="guide.href">
              <NavigationMenuLink :href="guide.href">
                {{ guide.title }}
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink
          :class="buttonVariants({ variant: 'ghost', class: 'justify-start' })"
          href="https://github.com/vase-ui/vase-ui"
        >
          GitHub
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>

    <NavigationMenuPopup align="start" side="right" />
  </NavigationMenu>
</template>
