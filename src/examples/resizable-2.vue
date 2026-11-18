<script setup lang="ts">
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../components/ui/resizable'
</script>

<template>
  <ResizablePanelGroup class="h-64 max-w-md rounded-lg border" orientation="vertical">
    <ResizablePanel class="flex items-center justify-center p-4" default-size="30" min-size="20">
      <span class="font-medium text-sm">Header</span>
    </ResizablePanel>
    <ResizableHandle aria-label="Resize the header" />
    <ResizablePanel class="flex items-center justify-center p-4">
      <span class="font-medium text-sm">Content</span>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>
