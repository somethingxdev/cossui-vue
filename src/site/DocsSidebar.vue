<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ScrollArea } from '../components/ui/scroll-area'
import { docsNav } from './docs'
</script>

<template>
  <aside class="sticky top-(--header-height) z-30 hidden h-[calc(100svh-var(--header-height))] w-(--sidebar-width) shrink-0 lg:flex">
    <ScrollArea scroll-fade class="**:data-[slot=scroll-area-scrollbar]:hidden">
      <nav class="flex flex-col gap-4 px-4 py-2" aria-label="Docs">
        <div class="h-(--top-spacing) shrink-0" />
        <div v-for="group in docsNav" :key="group.title" class="flex flex-col gap-1">
          <p class="flex h-7 items-center font-medium text-sidebar-accent-foreground text-xs">
            {{ group.title }}
          </p>
          <ul class="flex flex-col gap-0.5">
            <li v-for="item in group.items" :key="item.to">
              <RouterLink
                :to="item.to"
                exact-active-class="bg-sidebar-accent font-medium text-sidebar-accent-foreground before:absolute before:inset-y-2 before:start-1 before:w-0.5 before:rounded-full before:bg-brand"
                class="relative flex w-full items-center rounded-lg p-2 ps-3.5 text-sidebar-foreground text-sm outline-none ring-sidebar-ring transition-colors hover:text-sidebar-accent-foreground focus-visible:ring-2"
              >
                {{ item.title }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </ScrollArea>
  </aside>
</template>
