<script setup lang="ts">
import { MenuItem, MenuSeparator, MenuShortcut } from '../components/ui/menu'
import { Menubar, MenubarMenu, MenubarPopup, MenubarTrigger } from '../components/ui/menubar'
</script>

<template>
  <Menubar>
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
        <MenuSeparator />
        <MenuItem>Full Screen</MenuItem>
      </MenubarPopup>
    </MenubarMenu>
  </Menubar>
</template>
