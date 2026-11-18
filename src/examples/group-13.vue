<script setup lang="ts">
import { ChevronDownIcon, DownloadIcon, EditIcon, ShareIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import { Group, GroupSeparator } from '../components/ui/group'
import { Menu, MenuItem, MenuPopup, MenuTrigger } from '../components/ui/menu'
</script>

<template>
  <Group aria-label="Subscription actions">
    <Button>Subscribe</Button>
    <GroupSeparator class="bg-primary/72" />
    <Menu>
      <MenuTrigger :as="Button" aria-label="Copy options" size="icon">
        <ChevronDownIcon aria-hidden="true" class="size-4" />
      </MenuTrigger>
      <MenuPopup align="end">
        <MenuItem>
          <ShareIcon aria-hidden="true" />
          Share link
        </MenuItem>
        <MenuItem>
          <DownloadIcon aria-hidden="true" />
          Download
        </MenuItem>
        <MenuItem>
          <EditIcon aria-hidden="true" />
          Duplicate
        </MenuItem>
      </MenuPopup>
    </Menu>
  </Group>
</template>
