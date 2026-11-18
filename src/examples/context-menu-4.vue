<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuPopup,
  ContextMenuTrigger,
} from '../components/ui/context-menu'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger class="flex h-32 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-muted-foreground text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuPopup>
      <ContextMenuCheckboxItem default-checked>
        Show hidden files
      </ContextMenuCheckboxItem>
      <ContextMenuCheckboxItem>Compact view</ContextMenuCheckboxItem>
    </ContextMenuPopup>
  </ContextMenu>
</template>
