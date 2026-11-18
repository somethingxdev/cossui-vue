<script setup lang="ts">
import {
  MenuItem,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
} from '../components/ui/menu'
import { Menubar, MenubarMenu, MenubarPopup, MenubarTrigger } from '../components/ui/menubar'
</script>

<template>
  <Menubar class="w-fit">
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarPopup>
        <MenuItem>
          New
          <MenuShortcut>⌘N</MenuShortcut>
        </MenuItem>
        <MenuItem>
          Open
          <MenuShortcut>⌘O</MenuShortcut>
        </MenuItem>
        <MenuItem>
          Save
          <MenuShortcut>⌘S</MenuShortcut>
        </MenuItem>
        <MenuSub>
          <MenuSubTrigger>Export</MenuSubTrigger>
          <MenuSubPopup>
            <MenuItem>PDF</MenuItem>
            <MenuItem>PNG</MenuItem>
            <MenuItem>SVG</MenuItem>
          </MenuSubPopup>
        </MenuSub>
        <MenuSeparator />
        <MenuItem>
          Print
          <MenuShortcut>⌘P</MenuShortcut>
        </MenuItem>
      </MenubarPopup>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarPopup>
        <MenuItem>
          Cut
          <MenuShortcut>⌘X</MenuShortcut>
        </MenuItem>
        <MenuItem>
          Copy
          <MenuShortcut>⌘C</MenuShortcut>
        </MenuItem>
        <MenuItem>
          Paste
          <MenuShortcut>⌘V</MenuShortcut>
        </MenuItem>
      </MenubarPopup>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarPopup>
        <MenuItem>Zoom In</MenuItem>
        <MenuItem>Zoom Out</MenuItem>
        <MenuSub>
          <MenuSubTrigger>Layout</MenuSubTrigger>
          <MenuSubPopup>
            <MenuItem>Single Page</MenuItem>
            <MenuItem>Two Pages</MenuItem>
            <MenuItem>Continuous</MenuItem>
          </MenuSubPopup>
        </MenuSub>
        <MenuSeparator />
        <MenuItem>Full Screen</MenuItem>
      </MenubarPopup>
    </MenubarMenu>

    <MenubarMenu disabled>
      <MenubarTrigger>Help</MenubarTrigger>
    </MenubarMenu>
  </Menubar>
</template>
