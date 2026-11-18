<script setup lang="ts">
import { Button } from '../components/ui/button'
import {
  Menu,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuTrigger,
} from '../components/ui/menu'
</script>

<template>
  <Menu>
    <MenuTrigger :as="Button" variant="outline">
      Open menu
    </MenuTrigger>
    <MenuPopup>
      <MenuGroup>
        <MenuGroupLabel>Account</MenuGroupLabel>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Billing</MenuItem>
      </MenuGroup>
      <MenuSeparator />
      <MenuGroup>
        <MenuGroupLabel>Support</MenuGroupLabel>
        <MenuItem>Docs</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuGroup>
    </MenuPopup>
  </Menu>
</template>
