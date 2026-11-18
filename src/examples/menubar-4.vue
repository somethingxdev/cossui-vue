<script setup lang="ts">
import { MenuItem } from '../components/ui/menu'
import { Menubar, MenubarMenu, MenubarPopup, MenubarTrigger } from '../components/ui/menubar'
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarPopup>
        <MenuItem>Undo</MenuItem>
        <MenuItem disabled>
          Redo
        </MenuItem>
      </MenubarPopup>
    </MenubarMenu>

    <MenubarMenu disabled>
      <MenubarTrigger>Help</MenubarTrigger>
    </MenubarMenu>
  </Menubar>
</template>
