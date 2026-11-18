<script setup lang="ts">
import { CopyIcon, PencilIcon, ShareIcon, TrashIcon } from '@lucide/vue'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubPopup,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '../components/ui/context-menu'

const triggerClass = 'flex h-32 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-muted-foreground text-sm'
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <ContextMenu>
      <ContextMenuTrigger :class="triggerClass">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Reload</ContextMenuItem>
      </ContextMenuPopup>
    </ContextMenu>

    <ContextMenu>
      <ContextMenuTrigger :class="triggerClass">
        Right click for actions
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
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <ShareIcon aria-hidden="true" />
            Share
          </ContextMenuSubTrigger>
          <ContextMenuSubPopup>
            <ContextMenuItem>Email link</ContextMenuItem>
            <ContextMenuItem>Messages</ContextMenuItem>
            <ContextMenuItem>Notes</ContextMenuItem>
          </ContextMenuSubPopup>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem default-checked variant="switch">
          Auto save
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <TrashIcon aria-hidden="true" />
          Delete
          <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuPopup>
    </ContextMenu>
  </div>
</template>
