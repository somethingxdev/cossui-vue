<script setup lang="ts">
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../components/ui/resizable'
</script>

<template>
  <ResizablePanelGroup class="h-48 max-w-md rounded-lg border">
    <ResizablePanel class="flex items-center justify-center p-4" default-size="40">
      <span class="font-medium text-sm">Sidebar</span>
    </ResizablePanel>
    <ResizableHandle aria-label="Resize the sidebar" with-handle />
    <ResizablePanel class="flex items-center justify-center p-4">
      <span class="font-medium text-sm">Content</span>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>
