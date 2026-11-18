<script setup lang="ts">
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../components/ui/resizable'
</script>

<template>
  <div class="space-y-4">
    <ResizablePanelGroup class="h-48 rounded-lg border">
      <ResizablePanel id="navigation" class="p-4" default-size="25" min-size="15">
        <p class="font-medium text-sm">
          Navigation
        </p>
        <p class="mt-1 text-muted-foreground text-sm">
          The pages of the project.
        </p>
      </ResizablePanel>
      <ResizableHandle aria-label="Resize the navigation" />
      <ResizablePanel id="editor" class="p-4">
        <p class="font-medium text-sm">
          Editor
        </p>
        <p class="mt-1 text-muted-foreground text-sm">
          The code of the page.
        </p>
      </ResizablePanel>
      <ResizableHandle aria-label="Resize the preview" primary-panel="next" />
      <ResizablePanel id="preview" class="p-4" default-size="30">
        <p class="font-medium text-sm">
          Preview
        </p>
        <p class="mt-1 text-muted-foreground text-sm">
          The page as a visitor sees it.
        </p>
      </ResizablePanel>
    </ResizablePanelGroup>

    <ResizablePanelGroup class="h-64 rounded-lg border" orientation="vertical">
      <ResizablePanel class="flex items-center justify-center p-4" default-size="30" min-size="20">
        <span class="font-medium text-sm">Header</span>
      </ResizablePanel>
      <ResizableHandle aria-label="Resize the header" with-handle />
      <ResizablePanel class="flex items-center justify-center p-4">
        <span class="font-medium text-sm">Content</span>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>
