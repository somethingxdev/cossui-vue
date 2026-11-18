<script setup lang="ts">
import { ZoomInIcon, ZoomOutIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import { Group, GroupSeparator } from '../components/ui/group'
</script>

<template>
  <Group aria-label="Zoom controls" orientation="vertical">
    <Button aria-label="Zoom in" size="icon" variant="outline">
      <ZoomInIcon />
    </Button>
    <GroupSeparator orientation="horizontal" />
    <Button aria-label="Zoom Out" size="icon" variant="outline">
      <ZoomOutIcon />
    </Button>
  </Group>
</template>
