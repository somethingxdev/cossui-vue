<script setup lang="ts">
import { ArrowUpIcon } from '@lucide/vue'
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
import { Textarea } from '../components/ui/textarea'

const message = shallowRef('')
</script>

<template>
  <Drawer>
    <DrawerTrigger :as="Button" variant="outline">
      Open chat drawer
    </DrawerTrigger>
    <DrawerPopup class="[--drawer-height:calc(100dvh-3rem)]" show-bar>
      <DrawerHeader>
        <DrawerTitle>Chat</DrawerTitle>
      </DrawerHeader>
      <div class="min-h-0 flex-1">
        <DrawerPanel>
          <div aria-hidden="true" class="flex flex-col gap-2">
            <div v-for="n in 32" :key="n" class="h-12 shrink-0 rounded-xl bg-muted" />
          </div>
        </DrawerPanel>
      </div>
      <form class="mx-3 mb-3 flex items-end gap-2" @submit.prevent="message = ''">
        <Textarea v-model:value="message" aria-label="Message" placeholder="Write a message…" />
        <Button aria-label="Send message" size="icon" type="submit">
          <ArrowUpIcon aria-hidden="true" />
        </Button>
      </form>
    </DrawerPopup>
  </Drawer>
</template>
