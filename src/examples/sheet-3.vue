<script setup lang="ts">
import { Button } from '../components/ui/button'
import {
  Sheet,
  SheetDescription,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from '../components/ui/sheet'

const sides = [
  { side: 'right', title: 'Right', description: 'Right side of the screen.' },
  { side: 'left', title: 'Left', description: 'Left side of the screen.' },
  { side: 'top', title: 'Top', description: 'Top of the screen.' },
  { side: 'bottom', title: 'Bottom', description: 'Bottom of the screen.' },
] as const
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Sheet v-for="item in sides" :key="item.side">
      <SheetTrigger :as="Button" variant="outline">
        Open {{ item.title }}
      </SheetTrigger>
      <SheetPopup :show-close-button="false" :side="item.side">
        <SheetHeader>
          <SheetTitle>{{ item.title }}</SheetTitle>
          <SheetDescription>{{ item.description }}</SheetDescription>
        </SheetHeader>
        <SheetPanel>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </SheetPanel>
      </SheetPopup>
    </Sheet>
  </div>
</template>
