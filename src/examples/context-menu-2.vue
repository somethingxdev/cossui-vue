<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  ContextMenu,
  ContextMenuLinkItem,
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
      <ContextMenuLinkItem :as="RouterLink" to="/docs">
        Docs
      </ContextMenuLinkItem>
      <ContextMenuLinkItem :as="RouterLink" to="/docs/components">
        Components
      </ContextMenuLinkItem>
    </ContextMenuPopup>
  </ContextMenu>
</template>
