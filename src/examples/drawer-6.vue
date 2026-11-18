<script setup lang="ts">
import { Button } from '../components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerFooter,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from '../components/ui/drawer'
</script>

<template>
  <Drawer>
    <DrawerTrigger :as="Button" variant="outline">
      Scrollable content
    </DrawerTrigger>
    <DrawerPopup show-bar>
      <DrawerHeader>
        <DrawerTitle>Scrollable content</DrawerTitle>
      </DrawerHeader>
      <DrawerPanel>
        <div class="flex flex-col gap-2">
          <div v-for="n in 48" :key="n" class="h-12 shrink-0 rounded-xl border bg-muted" />
        </div>
      </DrawerPanel>
      <DrawerFooter>
        <DrawerClose :as="Button" variant="outline">
          Close
        </DrawerClose>
      </DrawerFooter>
    </DrawerPopup>
  </Drawer>
</template>
