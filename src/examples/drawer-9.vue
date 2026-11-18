<script setup lang="ts">
import type { SnapPoint } from '@ui-sdk/vue/drawer'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  Drawer,
  DrawerDescription,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from '../components/ui/drawer'

const snapPoints: SnapPoint[] = ['300px', 1]
const snapPoint = shallowRef<SnapPoint | null>(snapPoints[0])
</script>

<template>
  <Drawer
    v-model:snap-point="snapPoint"
    position="bottom"
    :snap-points="snapPoints"
  >
    <DrawerTrigger :as="Button" variant="outline">
      With snap points
    </DrawerTrigger>
    <DrawerPopup show-bar>
      <DrawerHeader>
        <DrawerTitle>Snap Points</DrawerTitle>
        <DrawerDescription>
          Drag the drawer to snap between a compact peek and full-height view.
        </DrawerDescription>
      </DrawerHeader>
      <DrawerPanel>
        <div class="flex flex-col gap-2">
          <div v-for="n in 48" :key="n" class="h-12 shrink-0 rounded-xl border bg-muted" />
        </div>
      </DrawerPanel>
    </DrawerPopup>
  </Drawer>
</template>
