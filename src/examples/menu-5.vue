<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '../components/ui/button'
import { Menu, MenuLinkItem, MenuPopup, MenuTrigger } from '../components/ui/menu'
</script>

<template>
  <Menu>
    <MenuTrigger :as="Button" variant="outline">
      Open menu
    </MenuTrigger>
    <MenuPopup>
      <MenuLinkItem :as="RouterLink" to="/docs">
        Docs
      </MenuLinkItem>
      <MenuLinkItem :as="RouterLink" to="/docs/components">
        Components
      </MenuLinkItem>
    </MenuPopup>
  </Menu>
</template>
