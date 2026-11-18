<script setup lang="ts">
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../components/ui/resizable'
</script>

<template>
  <ResizablePanelGroup class="h-48 max-w-md rounded-lg border">
    <ResizablePanel
      class="p-4 data-collapsed:p-0"
      collapsed-size="0"
      collapsible
      default-size="30"
      min-size="20"
    >
      <p class="font-medium text-sm">
        Navigation
      </p>
      <p class="mt-1 text-muted-foreground text-sm">
        Drag the handle to the left edge to collapse it.
      </p>
    </ResizablePanel>
    <ResizableHandle aria-label="Resize the navigation" with-handle />
    <ResizablePanel class="flex items-center justify-center p-4">
      <span class="font-medium text-sm">Content</span>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>
