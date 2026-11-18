<script setup lang="ts">
import { Button } from '../components/ui/button'
import {
  Drawer,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from '../components/ui/drawer'

const positions = [
  { position: 'right', title: 'Right' },
  { position: 'left', title: 'Left' },
  { position: 'top', title: 'Top' },
  { position: 'bottom', title: 'Bottom' },
] as const
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Drawer v-for="item in positions" :key="item.position" :position="item.position">
      <DrawerTrigger :as="Button" variant="outline">
        {{ item.title }}
      </DrawerTrigger>
      <DrawerPopup variant="straight">
        <DrawerHeader>
          <DrawerTitle>{{ item.title }}</DrawerTitle>
        </DrawerHeader>
        <DrawerPanel>
          <p class="text-muted-foreground text-sm">
            Content from the {{ item.position }}.
          </p>
        </DrawerPanel>
      </DrawerPopup>
    </Drawer>
  </div>
</template>
