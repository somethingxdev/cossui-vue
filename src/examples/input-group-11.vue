<script setup lang="ts">
import { InfoIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../components/ui/input-group'
import { Label } from '../components/ui/label'
import { Popover, PopoverPopup, PopoverTrigger } from '../components/ui/popover'
</script>

<template>
  <InputGroup>
    <InputGroupInput id="email-1" placeholder="team@coss.com" type="email" />
    <InputGroupAddon align="block-start">
      <Label class="text-foreground" for="email-1">
        Email
      </Label>
      <Popover open-on-hover>
        <PopoverTrigger
          :as="Button"
          aria-label="Email information"
          class="-m-1 ml-auto"
          size="icon-xs"
          variant="ghost"
        >
          <InfoIcon />
        </PopoverTrigger>
        <PopoverPopup aria-label="Email information" side="top" tooltip-style>
          <p>We&apos;ll use this to send you notifications</p>
        </PopoverPopup>
      </Popover>
    </InputGroupAddon>
  </InputGroup>
</template>
