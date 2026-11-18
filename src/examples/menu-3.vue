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
      <MenuCheckboxItem default-checked>
        Auto save
      </MenuCheckboxItem>
      <MenuCheckboxItem>Notifications</MenuCheckboxItem>
    </MenuPopup>
  </Menu>
</template>
