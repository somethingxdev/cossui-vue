<script setup lang="ts">
import type { ComposerTrigger, ComposerValue } from '../components/ui/composer'
import { ArrowUpIcon } from '@lucide/vue'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import {
  Composer,
  ComposerActionGroup,
  ComposerActions,
  ComposerInput,
  ComposerItem,
  ComposerList,
  ComposerPopup,
  ComposerSubmit,
} from '../components/ui/composer'
import {
  Drawer,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from '../components/ui/drawer'

const triggers: ComposerTrigger[] = [
  {
    character: '@',
    items: [
      { id: 'alex', label: 'Alex Morgan' },
      { id: 'sam', label: 'Sam Rivera' },
    ],
  },
  {
    character: '/',
    items: [
      { id: 'summarize', label: 'Summarize', type: 'action' },
      { id: 'rewrite', label: 'Rewrite', type: 'action' },
    ],
  },
]

const value = shallowRef<ComposerValue>([])
</script>

<template>
  <Drawer>
    <DrawerTrigger :as="Button" variant="outline">
      Open composer drawer
    </DrawerTrigger>
    <DrawerPopup class="[--drawer-height:calc(100dvh-3rem)]" show-bar>
      <DrawerHeader>
        <DrawerTitle>Chat</DrawerTitle>
      </DrawerHeader>
      <div class="min-h-0 flex-1">
        <DrawerPanel>
          <div aria-hidden="true" class="flex flex-col gap-2">
            <div v-for="index in 32" :key="index" class="h-12 shrink-0 rounded-xl bg-muted" />
          </div>
        </DrawerPanel>
      </div>
      <Composer v-model:value="value" class="mx-3 mb-3" :triggers="triggers" @submit="value = []">
        <ComposerInput aria-label="Message" placeholder="Write a message…" />
        <ComposerPopup>
          <ComposerList>
            <template #item="{ item }">
              <ComposerItem :value="item">
                {{ item.label }}
              </ComposerItem>
            </template>
          </ComposerList>
        </ComposerPopup>
        <ComposerActions>
          <ComposerActionGroup align="end">
            <ComposerSubmit :as="Button" aria-label="Send message" size="icon">
              <ArrowUpIcon aria-hidden="true" />
            </ComposerSubmit>
          </ComposerActionGroup>
        </ComposerActions>
      </Composer>
    </DrawerPopup>
  </Drawer>
</template>
