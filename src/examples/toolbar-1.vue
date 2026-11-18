<script setup lang="ts">
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  DollarSignIcon,
  PercentIcon,
} from '@lucide/vue'
import { Button } from '../components/ui/button'
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from '../components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group'
import { Toolbar, ToolbarButton, ToolbarGroup, ToolbarSeparator } from '../components/ui/toolbar'
import { Tooltip, TooltipPopup, TooltipPrimitive } from '../components/ui/tooltip'

const items = [
  { label: 'Helvetica', value: 'helvetica' },
  { label: 'Arial', value: 'arial' },
  { label: 'Times New Roman', value: 'times-new-roman' },
]

const alignments = [
  { label: 'Align left', value: 'left', icon: AlignLeftIcon },
  { label: 'Align center', value: 'center', icon: AlignCenterIcon },
  { label: 'Align right', value: 'right', icon: AlignRightIcon },
]

const formats = [
  { label: 'Format as currency', icon: DollarSignIcon },
  { label: 'Format as percent', icon: PercentIcon },
]
</script>

<template>
  <Toolbar>
    <ToggleGroup class="border-none p-0" :default-value="['left']">
      <Tooltip v-for="item in alignments" :key="item.value">
        <TooltipPrimitive.TooltipTrigger>
          <template #render="{ props: triggerProps }">
            <ToggleGroupItem v-bind="triggerProps" :aria-label="item.label" :value="item.value">
              <component :is="item.icon" />
            </ToggleGroupItem>
          </template>
        </TooltipPrimitive.TooltipTrigger>
        <TooltipPopup :side-offset="8">
          {{ item.label }}
        </TooltipPopup>
      </Tooltip>
    </ToggleGroup>
    <ToolbarSeparator />
    <ToolbarGroup>
      <Tooltip v-for="item in formats" :key="item.label">
        <TooltipPrimitive.TooltipTrigger>
          <template #render="{ props: triggerProps }">
            <ToolbarButton
              v-bind="triggerProps"
              :aria-label="item.label"
              :as="Button"
              size="icon"
              variant="ghost"
            >
              <component :is="item.icon" />
            </ToolbarButton>
          </template>
        </TooltipPrimitive.TooltipTrigger>
        <TooltipPopup :side-offset="8">
          {{ item.label }}
        </TooltipPopup>
      </Tooltip>
    </ToolbarGroup>
    <ToolbarSeparator />
    <ToolbarGroup>
      <Select default-value="helvetica" :items="items">
        <Tooltip>
          <TooltipPrimitive.TooltipTrigger>
            <template #render="{ props: triggerProps }">
              <ToolbarButton v-bind="triggerProps" aria-label="Font" :as="SelectTrigger">
                <SelectValue />
              </ToolbarButton>
            </template>
          </TooltipPrimitive.TooltipTrigger>
          <TooltipPopup :side-offset="8">
            Select a different font
          </TooltipPopup>
        </Tooltip>
        <SelectPopup>
          <SelectItem v-for="item in items" :key="item.value" :value="item.value">
            {{ item.label }}
          </SelectItem>
        </SelectPopup>
      </Select>
    </ToolbarGroup>
    <ToolbarSeparator />
    <ToolbarGroup>
      <ToolbarButton :as="Button">
        Save
      </ToolbarButton>
    </ToolbarGroup>
  </Toolbar>
</template>
