<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  Drawer,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from '../components/ui/drawer'

const open = shallowRef(false)
const links = [
  'Home',
  'Profile',
  'Settings',
  'Sign out',
]
</script>

<template>
  <Drawer v-model:open="open" position="left">
    <DrawerTrigger :as="Button" variant="outline">
      Open menu
    </DrawerTrigger>
    <DrawerPopup show-close-button variant="straight">
      <DrawerHeader>
        <DrawerTitle>Menu</DrawerTitle>
      </DrawerHeader>
      <DrawerPanel>
        <nav class="-mx-[calc(--spacing(3)-1px)] flex flex-col gap-0.5">
          <Button
            v-for="link in links"
            :key="link"
            as="a"
            class="justify-start"
            href="#"
            variant="ghost"
            @click="open = false"
          >
            {{ link }}
          </Button>
        </nav>
      </DrawerPanel>
    </DrawerPopup>
  </Drawer>
</template>
