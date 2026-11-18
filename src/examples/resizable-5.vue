<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '../components/ui/button'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../components/ui/resizable'

const layout = ref<Record<string, number>>({ editor: 60, preview: 40 })
</script>

<template>
  <div class="flex w-full max-w-md flex-col gap-4">
    <ResizablePanelGroup v-model:layout="layout" class="h-48 rounded-lg border">
      <ResizablePanel id="editor" class="flex items-center justify-center p-4">
        <span class="font-medium text-sm">Editor</span>
      </ResizablePanel>
      <ResizableHandle aria-label="Resize the preview" />
      <ResizablePanel id="preview" class="flex items-center justify-center p-4">
        <span class="font-medium text-sm">Preview</span>
      </ResizablePanel>
    </ResizablePanelGroup>
    <div class="flex items-center gap-4">
      <Button variant="outline" @click="layout = { editor: 50, preview: 50 }">
        Split evenly
      </Button>
      <p class="text-muted-foreground text-sm">
        Editor {{ Math.round(layout.editor ?? 0) }}% · Preview {{ Math.round(layout.preview ?? 0) }}%
      </p>
    </div>
  </div>
</template>
