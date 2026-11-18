<script setup lang="ts">
import { InfoIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Popover, PopoverPopup, PopoverTrigger } from '../components/ui/popover'
</script>

<template>
  <div class="relative w-full max-w-xs">
    <Input
      aria-label="Password"
      class="*:data-[slot=input]:pe-8"
      placeholder="Password"
      type="password"
    />
    <div class="absolute inset-y-0 end-0 flex items-center pe-1.5">
      <Popover open-on-hover>
        <PopoverTrigger
          :as="Button"
          aria-label="Password requirements"
          size="icon-xs"
          variant="ghost"
        >
          <InfoIcon />
        </PopoverTrigger>
        <PopoverPopup
          aria-label="Password requirements"
          side="top"
          tooltip-style
        >
          <p>Min. 8 characters</p>
        </PopoverPopup>
      </Popover>
    </div>
  </div>
</template>
