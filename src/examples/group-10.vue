<script setup lang="ts">
import { ArrowLeftIcon, ArrowRightIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import { Group, GroupSeparator } from '../components/ui/group'
</script>

<template>
  <Group aria-label="Pagination">
    <Group aria-label="Page numbers">
      <template v-for="page in 5" :key="page">
        <GroupSeparator v-if="page > 1" />
        <Button class="min-w-8" variant="outline">
          {{ page }}
        </Button>
      </template>
    </Group>
    <Group aria-label="Navigation">
      <Button aria-label="Previous" size="icon" variant="outline">
        <ArrowLeftIcon aria-hidden="true" />
      </Button>
      <GroupSeparator />
      <Button aria-label="Next" size="icon" variant="outline">
        <ArrowRightIcon aria-hidden="true" />
      </Button>
    </Group>
  </Group>
</template>
