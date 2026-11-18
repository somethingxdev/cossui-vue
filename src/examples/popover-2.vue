<script setup lang="ts">
import { XIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import {
  Popover,
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from '../components/ui/popover'
</script>

<template>
  <Popover>
    <PopoverTrigger :as="Button" variant="outline">
      Open Popover
    </PopoverTrigger>
    <PopoverPopup class="w-80">
      <PopoverClose
        :as="Button"
        aria-label="Close"
        class="absolute end-2 top-2"
        size="icon"
        variant="ghost"
      >
        <XIcon />
      </PopoverClose>
      <div class="mb-2">
        <PopoverTitle class="text-base">
          Notifications
        </PopoverTitle>
        <PopoverDescription>
          You are all caught up. Good job!
        </PopoverDescription>
      </div>
      <PopoverClose :as="Button" variant="outline">
        Close
      </PopoverClose>
    </PopoverPopup>
  </Popover>
</template>
