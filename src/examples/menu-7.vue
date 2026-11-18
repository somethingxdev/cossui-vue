<script setup lang="ts">
import { Button } from '../components/ui/button'
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
  MenuTrigger,
} from '../components/ui/menu'
</script>

<template>
  <Menu>
    <MenuTrigger :as="Button" variant="outline">
      Open menu
    </MenuTrigger>
    <MenuPopup>
      <MenuItem>Item one</MenuItem>
      <MenuSub>
        <MenuSubTrigger>More</MenuSubTrigger>
        <MenuSubPopup>
          <MenuItem>Sub item A</MenuItem>
          <MenuItem>Sub item B</MenuItem>
        </MenuSubPopup>
      </MenuSub>
      <MenuItem>Item two</MenuItem>
    </MenuPopup>
  </Menu>
</template>
