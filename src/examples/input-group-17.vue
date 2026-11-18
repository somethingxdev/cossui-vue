<script setup lang="ts">
import { ArrowUpIcon, PlusIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '../components/ui/input-group'
import { Menu, MenuItem, MenuPopup, MenuTrigger } from '../components/ui/menu'
import { Tooltip, TooltipPopup, TooltipPrimitive, TooltipTrigger } from '../components/ui/tooltip'
</script>

<template>
  <InputGroup>
    <InputGroupTextarea placeholder="Ask, Search or Chat…" />
    <InputGroupAddon align="block-end">
      <Menu>
        <Tooltip>
          <!-- One button is the trigger of both the tooltip and the menu. -->
          <TooltipPrimitive.TooltipTrigger>
            <template #render="{ props: tooltip }">
              <MenuTrigger
                :as="Button"
                v-bind="tooltip"
                aria-label="Add files"
                class="rounded-full"
                size="icon-sm"
                variant="ghost"
              >
                <PlusIcon />
              </MenuTrigger>
            </template>
          </TooltipPrimitive.TooltipTrigger>
          <TooltipPopup>Add files and more</TooltipPopup>
        </Tooltip>
        <MenuPopup align="start">
          <MenuItem>Add photos &amp; files</MenuItem>
          <MenuItem>Create image</MenuItem>
          <MenuItem>Thinking</MenuItem>
          <MenuItem>Deep research</MenuItem>
        </MenuPopup>
      </Menu>
      <InputGroupText class="ml-auto">
        78% used
      </InputGroupText>
      <Tooltip>
        <TooltipTrigger
          :as="Button"
          aria-label="Send"
          class="rounded-full"
          size="icon-sm"
          variant="default"
        >
          <ArrowUpIcon />
        </TooltipTrigger>
        <TooltipPopup>Send</TooltipPopup>
      </Tooltip>
    </InputGroupAddon>
  </InputGroup>
</template>
