<script setup lang="ts">
import { CopyIcon, PencilIcon, ShareIcon, TrashIcon } from '@lucide/vue'
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '../components/ui/context-menu'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger class="flex h-32 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-muted-foreground text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuPopup>
      <ContextMenuItem>
        <PencilIcon aria-hidden="true" />
        Edit
        <ContextMenuShortcut>⌘E</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <CopyIcon aria-hidden="true" />
        Copy
        <ContextMenuShortcut>⌘C</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <ShareIcon aria-hidden="true" />
        Share
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem variant="destructive">
        <TrashIcon aria-hidden="true" />
        Delete
        <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuPopup>
  </ContextMenu>
</template>
