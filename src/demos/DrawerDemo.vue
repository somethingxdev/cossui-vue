<script setup lang="ts">
import { CopyIcon, EllipsisIcon, PencilIcon, ShareIcon, TrashIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerMenu,
  DrawerMenuCheckboxItem,
  DrawerMenuGroup,
  DrawerMenuGroupLabel,
  DrawerMenuItem,
  DrawerMenuRadioGroup,
  DrawerMenuRadioItem,
  DrawerMenuSeparator,
  DrawerMenuTrigger,
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

const actions = [
  { label: 'Edit', icon: PencilIcon },
  { label: 'Duplicate', icon: CopyIcon },
  { label: 'Share', icon: ShareIcon },
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap gap-2">
      <Drawer>
        <DrawerTrigger :as="Button" variant="outline">
          Open drawer
        </DrawerTrigger>
        <DrawerPopup show-bar>
          <DrawerHeader class="text-center">
            <DrawerTitle>Notifications</DrawerTitle>
            <DrawerDescription>This is the description of the drawer.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter class="justify-center sm:justify-center" variant="bare">
            <DrawerClose :as="Button" variant="outline">
              Close
            </DrawerClose>
          </DrawerFooter>
        </DrawerPopup>
      </Drawer>

      <Drawer position="right">
        <DrawerTrigger :as="Button" variant="outline">
          Right, straight
        </DrawerTrigger>
        <DrawerPopup show-close-button variant="straight">
          <DrawerHeader>
            <DrawerTitle>Notifications</DrawerTitle>
            <DrawerDescription>This is the description of the drawer.</DrawerDescription>
          </DrawerHeader>
          <DrawerPanel>
            <p class="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris.
            </p>
          </DrawerPanel>
        </DrawerPopup>
      </Drawer>

      <Drawer>
        <DrawerTrigger :as="Button" aria-label="Open menu" size="icon" variant="outline">
          <EllipsisIcon aria-hidden="true" />
        </DrawerTrigger>
        <DrawerPopup aria-label="Actions" show-bar>
          <DrawerPanel>
            <DrawerMenu>
              <DrawerMenuGroup>
                <DrawerMenuGroupLabel>Actions</DrawerMenuGroupLabel>
                <DrawerClose v-for="action in actions" :key="action.label" :as="DrawerMenuItem">
                  <component :is="action.icon" aria-hidden="true" />
                  {{ action.label }}
                </DrawerClose>
              </DrawerMenuGroup>
              <DrawerMenuSeparator />
              <DrawerMenuCheckboxItem>Shuffle</DrawerMenuCheckboxItem>
              <DrawerMenuCheckboxItem>Repeat</DrawerMenuCheckboxItem>
              <DrawerMenuCheckboxItem disabled>
                Enhanced Audio
              </DrawerMenuCheckboxItem>
              <DrawerMenuSeparator />
              <DrawerMenuGroup>
                <DrawerMenuGroupLabel>Sort by</DrawerMenuGroupLabel>
                <DrawerMenuRadioGroup default-value="artist">
                  <DrawerMenuRadioItem value="artist">
                    Artist
                  </DrawerMenuRadioItem>
                  <DrawerMenuRadioItem value="album">
                    Album
                  </DrawerMenuRadioItem>
                  <DrawerMenuRadioItem value="title">
                    Title
                  </DrawerMenuRadioItem>
                </DrawerMenuRadioGroup>
              </DrawerMenuGroup>
              <DrawerMenuSeparator />
              <DrawerMenuCheckboxItem variant="switch">
                Auto save
              </DrawerMenuCheckboxItem>
              <DrawerMenuSeparator />
              <Drawer>
                <DrawerMenuTrigger>Add to Playlist</DrawerMenuTrigger>
                <DrawerPopup aria-label="Add to Playlist" show-bar>
                  <DrawerPanel>
                    <DrawerMenu>
                      <DrawerMenuGroup>
                        <DrawerMenuGroupLabel>Add to Playlist</DrawerMenuGroupLabel>
                      </DrawerMenuGroup>
                      <DrawerClose v-for="genre in ['Jazz', 'Rock', 'Pop']" :key="genre" :as="DrawerMenuItem">
                        {{ genre }}
                      </DrawerClose>
                    </DrawerMenu>
                  </DrawerPanel>
                </DrawerPopup>
              </Drawer>
              <DrawerMenuSeparator />
              <DrawerMenuGroup>
                <DrawerMenuGroupLabel>Danger zone</DrawerMenuGroupLabel>
                <DrawerClose :as="DrawerMenuItem" variant="destructive">
                  <TrashIcon aria-hidden="true" />
                  Delete
                </DrawerClose>
              </DrawerMenuGroup>
            </DrawerMenu>
          </DrawerPanel>
        </DrawerPopup>
      </Drawer>
    </div>

    <div class="flex flex-wrap gap-2">
      <Drawer v-for="item in positions" :key="item.position" :position="item.position">
        <DrawerTrigger :as="Button" variant="outline">
          {{ item.title }} (inset)
        </DrawerTrigger>
        <DrawerPopup variant="inset">
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
  </div>
</template>
