<script setup lang="ts">
import { Button } from '../components/ui/button'
import { Menu, MenuItem, MenuPopup, MenuTrigger } from '../components/ui/menu'
</script>

<template>
  <Menu>
    <MenuTrigger :as="Button" open-on-hover variant="outline">
      Hover me
    </MenuTrigger>
    <MenuPopup>
      <MenuItem>Item one</MenuItem>
      <MenuItem>Item two</MenuItem>
    </MenuPopup>
  </Menu>
</template>
