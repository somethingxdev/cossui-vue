<script setup lang="ts">
import { PauseIcon, PlayIcon, SkipBackIcon, SkipForwardIcon, TrashIcon } from '@lucide/vue'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
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
  MenuShortcut,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
  MenuTrigger,
} from '../components/ui/menu'

const sortBy = shallowRef('artist')
const autoSave = shallowRef(true)
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Menu>
      <MenuTrigger :as="Button" variant="outline">
        Open menu
      </MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>Playback</MenuGroupLabel>
          <MenuItem>
            <PlayIcon aria-hidden="true" />
            Play
            <MenuShortcut>⌘P</MenuShortcut>
          </MenuItem>
          <MenuItem disabled>
            <PauseIcon aria-hidden="true" />
            Pause
            <MenuShortcut>⇧⌘P</MenuShortcut>
          </MenuItem>
          <MenuItem>
            <SkipBackIcon aria-hidden="true" />
            Previous
            <MenuShortcut>⌘[</MenuShortcut>
          </MenuItem>
          <MenuItem>
            <SkipForwardIcon aria-hidden="true" />
            Next
            <MenuShortcut>⌘]</MenuShortcut>
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
          <MenuRadioGroup v-model:value="sortBy">
            <MenuRadioItem value="artist">
              Artist
            </MenuRadioItem>
            <MenuRadioItem value="album">
              Album
            </MenuRadioItem>
            <MenuRadioItem value="title">
              Title
            </MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
        <MenuSeparator />
        <MenuCheckboxItem v-model:checked="autoSave" variant="switch">
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
                <MenuItem>Hard Rock</MenuItem>
                <MenuItem>Soft Rock</MenuItem>
                <MenuItem>Classic Rock</MenuItem>
                <MenuSeparator />
                <MenuItem>Metal</MenuItem>
                <MenuItem>Punk</MenuItem>
                <MenuItem>Grunge</MenuItem>
                <MenuItem>Alternative</MenuItem>
                <MenuItem>Indie</MenuItem>
                <MenuItem>Electronic</MenuItem>
              </MenuSubPopup>
            </MenuSub>
            <MenuItem>Pop</MenuItem>
          </MenuSubPopup>
        </MenuSub>
        <MenuSeparator />
        <MenuItem variant="destructive">
          <TrashIcon aria-hidden="true" />
          Delete
          <MenuShortcut>⌘⌫</MenuShortcut>
        </MenuItem>
      </MenuPopup>
    </Menu>

    <Menu>
      <MenuTrigger :as="Button" open-on-hover variant="outline">
        Hover me
      </MenuTrigger>
      <MenuPopup>
        <MenuItem>Item one</MenuItem>
        <MenuItem>Item two</MenuItem>
      </MenuPopup>
    </Menu>

    <Menu>
      <MenuTrigger :as="Button" variant="outline">
        Settings
      </MenuTrigger>
      <MenuPopup>
        <MenuCheckboxItem default-checked variant="switch">
          Auto save
        </MenuCheckboxItem>
        <MenuCheckboxItem variant="switch">
          Notifications
        </MenuCheckboxItem>
        <MenuCheckboxItem default-checked variant="switch">
          Dark mode
        </MenuCheckboxItem>
      </MenuPopup>
    </Menu>
  </div>
</template>
