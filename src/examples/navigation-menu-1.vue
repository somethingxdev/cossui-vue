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

const overviewLinks = [
  { href: 'https://vase-ui.com/quick-start', title: 'Quick Start', description: 'Install and assemble your first component.' },
  { href: 'https://vase-ui.com/parity', title: 'Parity', description: 'See which components are complete and which are not started.' },
  { href: 'https://vase-ui.com/thanks', title: 'Thanks', description: 'Meet the people whose work Vase UI carries.' },
  { href: 'https://vase-ui.com/', title: 'About', description: 'Learn more about Vase UI and why it exists.' },
]

const handbookLinks = [
  { href: 'https://vase-ui.com/handbook/styling', title: 'Styling', description: 'Vase UI components can be styled with plain CSS, CSS Modules, or utility classes.' },
  { href: 'https://vase-ui.com/handbook/animation', title: 'Animation', description: 'Vase UI components can be animated with CSS transitions, CSS animations, or JavaScript.' },
  { href: 'https://vase-ui.com/handbook/composition', title: 'Composition', description: 'Vase UI components can be replaced and composed with your own components.' },
]
</script>

<template>
  <NavigationMenu aria-label="Main">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[calc(100vw-2.5rem)] sm:w-md sm:grid-cols-2">
            <li v-for="link in overviewLinks" :key="link.href">
              <NavigationMenuLink class="py-2" :href="link.href">
                <div>
                  <div class="font-medium">
                    {{ link.title }}
                  </div>
                  <p class="text-muted-foreground">
                    {{ link.description }}
                  </p>
                </div>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Handbook</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[calc(100vw-2.5rem)] sm:w-xs">
            <li v-for="link in handbookLinks" :key="link.href">
              <NavigationMenuLink class="py-2" :href="link.href">
                <div>
                  <div class="font-medium">
                    {{ link.title }}
                  </div>
                  <p class="text-muted-foreground">
                    {{ link.description }}
                  </p>
                </div>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink :class="buttonVariants({ variant: 'ghost' })" href="https://github.com/vase-ui/vase-ui">
          GitHub
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>

    <NavigationMenuPopup />
  </NavigationMenu>
</template>
