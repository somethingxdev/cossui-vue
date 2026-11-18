<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuPopup,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuTrigger,
} from '../components/ui/context-menu'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger class="flex h-32 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-muted-foreground text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuPopup>
      <ContextMenuRadioGroup default-value="system">
        <ContextMenuRadioItem value="light">
          Light
        </ContextMenuRadioItem>
        <ContextMenuRadioItem value="dark">
          Dark
        </ContextMenuRadioItem>
        <ContextMenuRadioItem value="system">
          System
        </ContextMenuRadioItem>
      </ContextMenuRadioGroup>
    </ContextMenuPopup>
  </ContextMenu>
</template>
