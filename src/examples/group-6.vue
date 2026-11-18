<script setup lang="ts">
import {
  ArchiveIcon,
  EditIcon,
  EllipsisIcon,
  FilesIcon,
  FilmIcon,
  ShareIcon,
  TrashIcon,
} from '@lucide/vue'
import { Button } from '../components/ui/button'
import { Group, GroupSeparator } from '../components/ui/group'
import { Menu, MenuItem, MenuPopup, MenuTrigger } from '../components/ui/menu'
</script>

<template>
  <Group aria-label="File actions">
    <Button>
      <FilesIcon aria-hidden="true" />
      Files
    </Button>
    <GroupSeparator class="bg-primary/72" />
    <Button>
      <FilmIcon aria-hidden="true" />
      Media
    </Button>
    <GroupSeparator class="bg-primary/72" />
    <Menu>
      <MenuTrigger :as="Button" aria-label="Menu" size="icon">
        <EllipsisIcon aria-hidden="true" class="size-4" />
      </MenuTrigger>
      <MenuPopup align="end">
        <MenuItem>
          <EditIcon aria-hidden="true" />
          Edit
        </MenuItem>
        <MenuItem>
          <ArchiveIcon aria-hidden="true" />
          Archive
        </MenuItem>
        <MenuItem>
          <ShareIcon aria-hidden="true" />
          Share
        </MenuItem>
        <MenuItem variant="destructive">
          <TrashIcon aria-hidden="true" />
          Delete
        </MenuItem>
      </MenuPopup>
    </Menu>
  </Group>
</template>
