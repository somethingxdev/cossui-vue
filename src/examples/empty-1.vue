<script setup lang="ts">
import { BookIcon, RouteIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '../components/ui/empty'
</script>

<template>
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <RouteIcon />
      </EmptyMedia>
      <EmptyTitle>No upcoming meetings</EmptyTitle>
      <EmptyDescription>Create a meeting to get started.</EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <div class="flex gap-2">
        <Button size="sm">
          Create meeting
        </Button>
        <Button size="sm" variant="outline">
          <BookIcon />
          View docs
        </Button>
      </div>
    </EmptyContent>
  </Empty>
</template>
