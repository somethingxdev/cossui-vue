<script setup lang="ts">
import { BoldIcon, ItalicIcon, LinkIcon, MailIcon, Share2Icon, UnderlineIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import {
  Tooltip,
  TooltipCreateHandle,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from '../components/ui/tooltip'

const formatting = [
  { label: 'Bold', icon: BoldIcon },
  { label: 'Italic', icon: ItalicIcon },
  { label: 'Underline', icon: UnderlineIcon },
]

const shareHandle = TooltipCreateHandle<string>()

const shareOptions = [
  { label: 'Copy link', hint: 'Copy shareable link', icon: LinkIcon },
  { label: 'Share via email', hint: 'Share via email', icon: MailIcon },
  { label: 'Share to social', hint: 'Share to social media', icon: Share2Icon },
]
</script>

<template>
  <div class="flex flex-wrap items-start gap-6">
    <Tooltip>
      <TooltipTrigger :as="Button" variant="outline">
        Hover me
      </TooltipTrigger>
      <TooltipPopup>Helpful hint</TooltipPopup>
    </Tooltip>

    <TooltipProvider>
      <div class="flex gap-1">
        <Tooltip v-for="item in formatting" :key="item.label">
          <TooltipTrigger :as="Button" :aria-label="`Toggle ${item.label.toLowerCase()}`" size="icon" variant="ghost">
            <component :is="item.icon" />
          </TooltipTrigger>
          <TooltipPopup>{{ item.label }}</TooltipPopup>
        </Tooltip>
      </div>
    </TooltipProvider>

    <TooltipProvider>
      <div class="flex flex-col gap-1" role="group" aria-label="Share options">
        <TooltipTrigger
          v-for="item in shareOptions"
          :key="item.label"
          :as="Button"
          :aria-label="item.label"
          :handle="shareHandle"
          :payload="item.hint"
          size="icon"
          variant="outline"
        >
          <component :is="item.icon" aria-hidden="true" />
        </TooltipTrigger>
      </div>
      <Tooltip v-slot="{ payload }" :handle="shareHandle">
        <TooltipPopup class="max-w-40" side="right">
          {{ payload }}
        </TooltipPopup>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>
