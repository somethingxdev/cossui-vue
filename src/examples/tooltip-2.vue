<script setup lang="ts">
import { BoldIcon, ItalicIcon, UnderlineIcon } from '@lucide/vue'
import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group'
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from '../components/ui/tooltip'
</script>

<template>
  <ToggleGroup :default-value="['bold']" multiple>
    <Tooltip>
      <TooltipTrigger :as="ToggleGroupItem" aria-label="Toggle bold" value="bold">
        <BoldIcon />
      </TooltipTrigger>
      <TooltipPopup>Bold</TooltipPopup>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger :as="ToggleGroupItem" aria-label="Toggle italic" value="italic">
        <ItalicIcon />
      </TooltipTrigger>
      <TooltipPopup>Italic</TooltipPopup>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger :as="ToggleGroupItem" aria-label="Toggle underline" value="underline">
        <UnderlineIcon />
      </TooltipTrigger>
      <TooltipPopup>Underline</TooltipPopup>
    </Tooltip>
  </ToggleGroup>
</template>
