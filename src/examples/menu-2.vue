<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '../components/ui/button'
import { Menu, MenuItem, MenuPopup, MenuTrigger } from '../components/ui/menu'

// UI SDK menus open on press, so the hover is wired here; the delay lets the pointer cross the gap to the popup.
const open = ref(false)
let timer: ReturnType<typeof setTimeout>

function hover(inside: boolean) {
  clearTimeout(timer)
  timer = setTimeout(() => open.value = inside, 100)
}
</script>

<template>
  <Menu v-model:open="open">
    <MenuTrigger
      :as="Button"
      variant="outline"
      @pointerenter="hover(true)"
      @pointerleave="hover(false)"
    >
      Hover me
    </MenuTrigger>
    <MenuPopup @pointerenter="hover(true)" @pointerleave="hover(false)">
      <MenuItem>Item one</MenuItem>
      <MenuItem>Item two</MenuItem>
    </MenuPopup>
  </Menu>
</template>
