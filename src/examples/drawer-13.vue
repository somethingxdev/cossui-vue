<script setup lang="ts">
import { CopyIcon, EllipsisIcon, PencilIcon, ShareIcon, TrashIcon } from '@lucide/vue'
import { useMediaQuery } from '@vueuse/core'
import { Button } from '../components/ui/button'
import {
  Drawer,
  DrawerClose,
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
  DrawerTrigger,
} from '../components/ui/drawer'
import {
  Menu,
  MenuCheckboxItem,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
  MenuTrigger,
} from '../components/ui/menu'

const isMobile = useMediaQuery('(max-width: 47.99rem)')

const actions = [
  { label: 'Edit', icon: PencilIcon },
  { label: 'Duplicate', icon: CopyIcon },
  { label: 'Share', icon: ShareIcon },
]
const sortOptions = [
  { value: 'artist', label: 'Artist' },
  { value: 'album', label: 'Album' },
  { value: 'title', label: 'Title' },
]
const classicRock = ['Hard Rock', 'Soft Rock', 'Classic Rock']
const moreRock = [
  'Metal',
  'Punk',
  'Grunge',
  'Alternative',
  'Indie',
  'Electronic',
]
</script>

<template>
  <Drawer v-if="isMobile">
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
              <DrawerMenuRadioItem v-for="option in sortOptions" :key="option.value" :value="option.value">
                {{ option.label }}
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
                  <DrawerClose :as="DrawerMenuItem">
                    Jazz
                  </DrawerClose>
                  <Drawer>
                    <DrawerMenuTrigger>Rock</DrawerMenuTrigger>
                    <DrawerPopup aria-label="Rock" show-bar>
                      <DrawerPanel>
                        <DrawerMenu>
                          <DrawerMenuGroup>
                            <DrawerMenuGroupLabel>Rock</DrawerMenuGroupLabel>
                          </DrawerMenuGroup>
                          <DrawerClose v-for="genre in classicRock" :key="genre" :as="DrawerMenuItem">
                            {{ genre }}
                          </DrawerClose>
                          <DrawerMenuSeparator />
                          <DrawerClose v-for="genre in moreRock" :key="genre" :as="DrawerMenuItem">
                            {{ genre }}
                          </DrawerClose>
                        </DrawerMenu>
                      </DrawerPanel>
                    </DrawerPopup>
                  </Drawer>
                  <DrawerClose :as="DrawerMenuItem">
                    Pop
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

  <Menu v-else>
    <MenuTrigger :as="Button" aria-label="Open menu" size="icon" variant="outline">
      <EllipsisIcon aria-hidden="true" />
    </MenuTrigger>
    <MenuPopup>
      <MenuGroup>
        <MenuGroupLabel>Actions</MenuGroupLabel>
        <MenuItem v-for="action in actions" :key="action.label">
          <component :is="action.icon" aria-hidden="true" />
          {{ action.label }}
        </MenuItem>
      </MenuGroup>
      <MenuSeparator />
      <MenuCheckboxItem>Shuffle</MenuCheckboxItem>
      <MenuCheckboxItem>Repeat</MenuCheckboxItem>
      <MenuCheckboxItem disabled>
        Enhanced Audio
      </MenuCheckboxItem>
      <MenuSeparator />
      <MenuGroup>
        <MenuGroupLabel>Sort by</MenuGroupLabel>
        <MenuRadioGroup default-value="artist">
          <MenuRadioItem v-for="option in sortOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </MenuRadioItem>
        </MenuRadioGroup>
      </MenuGroup>
      <MenuSeparator />
      <MenuCheckboxItem variant="switch">
        Auto save
      </MenuCheckboxItem>
      <MenuSeparator />
      <MenuSub>
        <MenuSubTrigger>Add to Playlist</MenuSubTrigger>
        <MenuSubPopup>
          <MenuItem>Jazz</MenuItem>
          <MenuSub>
            <MenuSubTrigger>Rock</MenuSubTrigger>
            <MenuSubPopup>
              <MenuItem v-for="genre in classicRock" :key="genre">
                {{ genre }}
              </MenuItem>
              <MenuSeparator />
              <MenuItem v-for="genre in moreRock" :key="genre">
                {{ genre }}
              </MenuItem>
            </MenuSubPopup>
          </MenuSub>
          <MenuItem>Pop</MenuItem>
        </MenuSubPopup>
      </MenuSub>
      <MenuSeparator />
      <MenuGroup>
        <MenuGroupLabel>Danger zone</MenuGroupLabel>
        <MenuItem variant="destructive">
          <TrashIcon aria-hidden="true" />
          Delete
        </MenuItem>
      </MenuGroup>
    </MenuPopup>
  </Menu>
</template>
