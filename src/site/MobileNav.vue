<script setup lang="ts">
import { MenuIcon } from '@lucide/vue'
import { shallowRef } from 'vue'
import { RouterLink } from 'vue-router'
import { Button } from '../components/ui/button'
import { Popover, PopoverPopup, PopoverTrigger } from '../components/ui/popover'
import { ScrollArea } from '../components/ui/scroll-area'
import { docsNav } from './docs'

const open = shallowRef(false)
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger :as="Button" size="icon" variant="ghost" aria-label="Open navigation" class="-ms-2">
      <MenuIcon />
    </PopoverTrigger>
    <PopoverPopup align="start" class="w-[calc(100vw-2rem)] max-w-sm">
      <ScrollArea class="max-h-[calc(100svh-8rem)]" scroll-fade>
        <nav class="flex flex-col gap-4" aria-label="Docs">
          <div v-for="group in docsNav" :key="group.title" class="flex flex-col gap-1">
            <p class="font-medium text-muted-foreground text-xs">
              {{ group.title }}
            </p>
            <RouterLink
              v-for="item in group.items"
              :key="item.to"
              :to="item.to"
              exact-active-class="font-medium text-brand"
              class="py-1 text-sm"
              @click="open = false"
            >
              {{ item.title }}
            </RouterLink>
          </div>
        </nav>
      </ScrollArea>
    </PopoverPopup>
  </Popover>
</template>
