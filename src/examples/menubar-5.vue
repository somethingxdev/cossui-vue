<script setup lang="ts">
import { MenuItem } from '../components/ui/menu'
import { Menubar, MenubarMenu, MenubarPopup, MenubarTrigger } from '../components/ui/menubar'
</script>

<template>
  <Menubar orientation="vertical">
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarPopup side="right">
        <MenuItem>New</MenuItem>
        <MenuItem>Open</MenuItem>
        <MenuItem>Save</MenuItem>
      </MenubarPopup>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarPopup side="right">
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenubarPopup>
    </MenubarMenu>
  </Menubar>
</template>
