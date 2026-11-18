<script setup lang="ts">
import { Button } from '../components/ui/button'
import { Menu, MenuPopup, MenuRadioGroup, MenuRadioItem, MenuTrigger } from '../components/ui/menu'
</script>

<template>
  <Menu>
    <MenuTrigger :as="Button" variant="outline">
      Open menu
    </MenuTrigger>
    <MenuPopup>
      <MenuRadioGroup default-value="system">
        <MenuRadioItem value="light">
          Light
        </MenuRadioItem>
        <MenuRadioItem value="dark">
          Dark
        </MenuRadioItem>
        <MenuRadioItem value="system">
          System
        </MenuRadioItem>
      </MenuRadioGroup>
    </MenuPopup>
  </Menu>
</template>
