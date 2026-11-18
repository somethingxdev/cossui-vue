<script setup lang="ts">
import { CheckIcon, CopyIcon } from '@lucide/vue'
import { useClipboard } from '@vueuse/core'
import { Button } from '../components/ui/button'
import { anchoredToastManager } from '../components/ui/toast'
import { Tooltip, TooltipPopup, TooltipTrigger } from '../components/ui/tooltip'

const toastTimeout = 2000

const { copy, copied } = useClipboard({ copiedDuring: toastTimeout, legacy: true })

async function handleCopy(event: MouseEvent) {
  // currentTarget is null once the event has been dispatched.
  const anchor = event.currentTarget as Element
  await copy('https://coss.com')
  anchoredToastManager.add({
    data: {
      tooltipStyle: true,
    },
    positionerProps: {
      anchor,
    },
    timeout: toastTimeout,
    title: 'Copied!',
  })
}
</script>

<template>
  <Tooltip>
    <TooltipTrigger
      :as="Button"
      aria-label="Copy link"
      :disabled="copied"
      size="icon"
      variant="outline"
      @click="handleCopy"
    >
      <CheckIcon v-if="copied" class="size-4" />
      <CopyIcon v-else class="size-4" />
    </TooltipTrigger>
    <TooltipPopup>
      <p>Copy to clipboard</p>
    </TooltipPopup>
  </Tooltip>
</template>
