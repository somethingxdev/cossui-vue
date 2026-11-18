<script setup lang="ts">
import {
  MenuItem,
  MenuSeparator,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
} from '../components/ui/menu'
import { Menubar, MenubarMenu, MenubarPopup, MenubarTrigger } from '../components/ui/menubar'
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarPopup>
        <MenuItem>New</MenuItem>
        <MenuItem>Open</MenuItem>
        <MenuSub>
          <MenuSubTrigger>Export</MenuSubTrigger>
          <MenuSubPopup>
            <MenuItem>PDF</MenuItem>
            <MenuItem>PNG</MenuItem>
            <MenuItem>SVG</MenuItem>
          </MenuSubPopup>
        </MenuSub>
      </MenubarPopup>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarPopup>
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
  </Menubar>
</template>
