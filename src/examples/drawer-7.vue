<script setup lang="ts">
import { Button } from '../components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
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
      Nested drawers
    </DrawerTrigger>
    <DrawerPopup show-bar>
      <DrawerHeader class="text-center">
        <DrawerTitle>First step</DrawerTitle>
        <DrawerDescription>
          This is the first step. Tap the button below to continue to the next screen.
        </DrawerDescription>
      </DrawerHeader>
      <DrawerFooter class="justify-center sm:justify-center" variant="bare">
        <DrawerClose :as="Button" variant="ghost">
          Cancel
        </DrawerClose>
        <Drawer>
          <DrawerTrigger :as="Button" variant="outline">
            Continue
          </DrawerTrigger>
          <DrawerPopup show-bar>
            <DrawerHeader class="text-center">
              <DrawerTitle>Second step</DrawerTitle>
              <DrawerDescription>
                You've reached the second step. Tap the button below to continue to the next screen.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerPanel>
              <div class="flex justify-center">
                <div class="size-48 shrink-0 rounded-xl border bg-muted" />
              </div>
            </DrawerPanel>
            <DrawerFooter class="justify-center sm:justify-center" variant="bare">
              <DrawerClose :as="Button" variant="ghost">
                Back
              </DrawerClose>
              <Drawer>
                <DrawerTrigger :as="Button" variant="outline">
                  Continue
                </DrawerTrigger>
                <DrawerPopup show-bar>
                  <DrawerHeader class="text-center">
                    <DrawerTitle>Third step</DrawerTitle>
                    <DrawerDescription>
                      You've reached the final step. You can close this drawer or go back.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerPanel>
                    <div class="flex justify-center">
                      <div class="size-32 shrink-0 rounded-full border bg-muted" />
                    </div>
                  </DrawerPanel>
                </DrawerPopup>
              </Drawer>
            </DrawerFooter>
          </DrawerPopup>
        </Drawer>
      </DrawerFooter>
    </DrawerPopup>
  </Drawer>
</template>
