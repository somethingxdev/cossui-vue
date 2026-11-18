<script setup lang="ts">
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon, DollarSignIcon, PercentIcon } from '@lucide/vue'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import { Toolbar, ToolbarButton, ToolbarGroup, ToolbarSeparator } from '../components/ui/toolbar'

const alignments = [
  { value: 'left', label: 'Align left', icon: AlignLeftIcon },
  { value: 'center', label: 'Align center', icon: AlignCenterIcon },
  { value: 'right', label: 'Align right', icon: AlignRightIcon },
] as const

const align = shallowRef<(typeof alignments)[number]['value']>('left')
</script>

<template>
  <Toolbar>
    <ToolbarGroup aria-label="Alignment">
      <ToolbarButton
        v-for="item in alignments"
        :key="item.value"
        :as="Button"
        :aria-label="item.label"
        :aria-pressed="align === item.value"
        :data-pressed="align === item.value ? '' : undefined"
        size="icon"
        variant="ghost"
        @click="align = item.value"
      >
        <component :is="item.icon" />
      </ToolbarButton>
    </ToolbarGroup>
    <ToolbarSeparator />
    <ToolbarGroup>
      <ToolbarButton :as="Button" aria-label="Format as currency" size="icon" variant="ghost">
        <DollarSignIcon />
      </ToolbarButton>
      <ToolbarButton :as="Button" aria-label="Format as percent" size="icon" variant="ghost">
        <PercentIcon />
      </ToolbarButton>
    </ToolbarGroup>
    <ToolbarSeparator />
    <ToolbarGroup>
      <ToolbarButton :as="Button">
        Save
      </ToolbarButton>
    </ToolbarGroup>
  </Toolbar>
</template>
