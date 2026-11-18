<script setup lang="ts">
import { ChevronDownIcon, GitForkIcon } from '@lucide/vue'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Group, GroupSeparator } from '../components/ui/group'
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from '../components/ui/popover'
</script>

<template>
  <Group aria-label="Repository actions">
    <Button variant="outline">
      <GitForkIcon aria-hidden="true" />
      Fork
      <Badge variant="secondary">
        48
      </Badge>
    </Button>
    <GroupSeparator />
    <Popover>
      <PopoverTrigger :as="Button" aria-label="Send options" size="icon" variant="outline">
        <ChevronDownIcon aria-hidden="true" />
      </PopoverTrigger>
      <PopoverPopup align="end" class="w-64">
        <PopoverTitle class="text-base">
          Existing forks
        </PopoverTitle>
        <PopoverDescription>
          You don't have any forks of this repository.
        </PopoverDescription>
      </PopoverPopup>
    </Popover>
  </Group>
</template>
