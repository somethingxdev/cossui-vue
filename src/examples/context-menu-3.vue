<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuSub,
  ContextMenuSubPopup,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '../components/ui/context-menu'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger class="flex h-32 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-muted-foreground text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuPopup>
      <ContextMenuItem>Cut</ContextMenuItem>
      <ContextMenuItem>Copy</ContextMenuItem>
      <ContextMenuItem>Paste</ContextMenuItem>
      <ContextMenuSub>
        <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
        <ContextMenuSubPopup>
          <ContextMenuItem>Email link</ContextMenuItem>
          <ContextMenuItem>Messages</ContextMenuItem>
          <ContextMenuItem>Notes</ContextMenuItem>
        </ContextMenuSubPopup>
      </ContextMenuSub>
    </ContextMenuPopup>
  </ContextMenu>
</template>
