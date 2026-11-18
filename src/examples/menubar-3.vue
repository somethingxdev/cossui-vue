<script setup lang="ts">
import { ref } from 'vue'
import {
  MenuCheckboxItem,
  MenuGroup,
  MenuGroupLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
} from '../components/ui/menu'
import { Menubar, MenubarMenu, MenubarPopup, MenubarTrigger } from '../components/ui/menubar'

const showToolbar = ref(true)
const showSidebar = ref(false)
const zoom = ref('100')
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarPopup>
        <MenuCheckboxItem v-model:checked="showToolbar">
          Toolbar
        </MenuCheckboxItem>
        <MenuCheckboxItem v-model:checked="showSidebar">
          Sidebar
        </MenuCheckboxItem>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>Zoom</MenuGroupLabel>
          <MenuRadioGroup v-model:value="zoom">
            <MenuRadioItem value="75">
              75%
            </MenuRadioItem>
            <MenuRadioItem value="100">
              100%
            </MenuRadioItem>
            <MenuRadioItem value="150">
              150%
            </MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
      </MenubarPopup>
    </MenubarMenu>
  </Menubar>
</template>
