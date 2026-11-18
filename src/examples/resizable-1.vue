<script setup lang="ts">
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../components/ui/resizable'
</script>

<template>
  <ResizablePanelGroup class="h-48 max-w-md rounded-lg border">
    <ResizablePanel class="flex items-center justify-center p-4" default-size="50">
      <span class="font-medium text-sm">One</span>
    </ResizablePanel>
    <ResizableHandle aria-label="Resize" />
    <ResizablePanel class="flex items-center justify-center p-4" default-size="50">
      <span class="font-medium text-sm">Two</span>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>
