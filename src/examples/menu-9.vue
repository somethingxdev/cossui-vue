<script setup lang="ts">
import { Button } from '../components/ui/button'
import { Menu, MenuCheckboxItem, MenuPopup, MenuTrigger } from '../components/ui/menu'
</script>

<template>
  <Menu>
    <MenuTrigger :as="Button" variant="outline">
      Open menu
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
</template>
