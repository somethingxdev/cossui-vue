<script setup lang="ts">
import { Button } from '../components/ui/button'
import { Menu, MenuItem, MenuPopup, MenuTrigger } from '../components/ui/menu'
</script>

<template>
  <Menu>
    <MenuTrigger :as="Button" variant="outline">
      Open menu
    </MenuTrigger>
    <MenuPopup>
      <MenuItem close-on-click>
        Profile
      </MenuItem>
      <MenuItem close-on-click>
        Settings
      </MenuItem>
      <MenuItem close-on-click>
        Log out
      </MenuItem>
    </MenuPopup>
  </Menu>
</template>
