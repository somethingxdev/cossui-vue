<script setup lang="ts">
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from '../components/ui/frame'
</script>

<template>
  <Frame class="w-full">
    <FrameHeader>
      <FrameTitle>Section header</FrameTitle>
      <FrameDescription>Brief description about the section</FrameDescription>
    </FrameHeader>
    <FramePanel v-for="panel in 2" :key="panel">
      <h2 class="font-semibold text-sm">
        Separated panel
      </h2>
      <p class="text-muted-foreground text-sm">
        Section description
      </p>
    </FramePanel>
  </Frame>
</template>
