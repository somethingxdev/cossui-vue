<script setup lang="ts">
import { InfoIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../components/ui/input-group'
import { Popover, PopoverPopup, PopoverTrigger } from '../components/ui/popover'
</script>

<template>
  <InputGroup>
    <InputGroupInput aria-label="Password" placeholder="Password" type="password" />
    <InputGroupAddon align="inline-end">
      <Popover open-on-hover>
        <PopoverTrigger
          :as="Button"
          aria-label="Password requirements"
          size="icon-xs"
          variant="ghost"
        >
          <InfoIcon />
        </PopoverTrigger>
        <PopoverPopup aria-label="Password requirements" side="top" tooltip-style>
          <p>Min. 8 characters</p>
        </PopoverPopup>
      </Popover>
    </InputGroupAddon>
  </InputGroup>
</template>
