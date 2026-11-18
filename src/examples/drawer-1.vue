<script setup lang="ts">
import { Button } from '../components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from '../components/ui/drawer'
</script>

<template>
  <Drawer>
    <DrawerTrigger :as="Button" variant="outline">
      Open drawer
    </DrawerTrigger>
    <DrawerPopup show-bar>
      <DrawerHeader class="text-center">
        <DrawerTitle>Notifications</DrawerTitle>
        <DrawerDescription>
          This is the description of the drawer.
        </DrawerDescription>
      </DrawerHeader>
      <DrawerFooter class="justify-center sm:justify-center" variant="bare">
        <DrawerClose :as="Button" variant="outline">
          Close
        </DrawerClose>
      </DrawerFooter>
    </DrawerPopup>
  </Drawer>
</template>
