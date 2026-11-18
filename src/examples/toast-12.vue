<script setup lang="ts">
import { SaveIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import { anchoredToastManager } from '../components/ui/toast'
import { Tooltip, TooltipPopup, TooltipTrigger } from '../components/ui/tooltip'

const ANCHORED_SAVE_TOAST_ID = 'coss-demo-anchored-save-toast'

function handleSave(event: MouseEvent) {
  anchoredToastManager.add({
    data: {
      tooltipStyle: true,
    },
    id: ANCHORED_SAVE_TOAST_ID,
    positionerProps: {
      anchor: event.currentTarget as Element,
      sideOffset: 6,
    },
    timeout: 2000,
    title: 'Draft saved',
  })
}
</script>

<template>
  <Tooltip>
    <TooltipTrigger
      :as="Button"
      aria-label="Save"
      :delay="0"
      size="icon"
      variant="outline"
      @click="handleSave"
    >
      <SaveIcon aria-hidden="true" />
    </TooltipTrigger>
    <TooltipPopup>
      <p>Save</p>
    </TooltipPopup>
  </Tooltip>
</template>
