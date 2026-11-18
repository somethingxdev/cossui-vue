<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Button } from '../components/ui/button'
import { Separator } from '../components/ui/separator'
import CommandMenu from './CommandMenu.vue'
import MobileNav from './MobileNav.vue'
import ModeSwitcher from './ModeSwitcher.vue'
import SiteLogo from './SiteLogo.vue'

const route = useRoute()

const navItems = computed(() => [
  { to: '/docs', label: 'Docs', active: route.path === '/docs' || route.path === '/docs/get-started' },
  {
    to: '/docs/components',
    label: 'Components',
    active: route.path.startsWith('/docs/components'),
  },
])
</script>

<template>
  <header class="sticky top-0 z-40 w-full bg-sidebar/80 backdrop-blur-sm before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border/64">
    <div class="container relative flex h-(--header-height) w-full items-center justify-between gap-2 px-4 sm:px-6">
      <div class="flex items-center gap-1 lg:hidden">
        <MobileNav />
      </div>
      <SiteLogo />
      <div class="ms-auto flex items-center gap-2 md:flex-1 md:justify-end">
        <nav class="hidden items-center gap-2 lg:flex">
          <Button
            v-for="item in navItems"
            :key="item.to"
            :as="RouterLink"
            :to="item.to"
            variant="ghost"
            :data-pressed="item.active || undefined"
            :aria-current="item.active ? 'page' : undefined"
          >
            {{ item.label }}
          </Button>
        </nav>
        <div class="mx-2 hidden md:flex">
          <CommandMenu />
        </div>
        <Separator class="h-5 max-md:hidden" orientation="vertical" />
        <ModeSwitcher />
      </div>
    </div>
  </header>
</template>
