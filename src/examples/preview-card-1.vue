<script setup lang="ts">
import { CornerUpLeftIcon, StarIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import {
  PreviewCard,
  PreviewCardPopup,
  PreviewCardTrigger,
} from '../components/ui/preview-card'
</script>

<template>
  <PreviewCard>
    <PreviewCardTrigger :as="Button" variant="ghost">
      coss.com/ui
    </PreviewCardTrigger>
    <PreviewCardPopup>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <h4 class="font-medium text-sm">
            coss.com/ui
          </h4>
          <p class="text-muted-foreground text-sm">
            Beautifully designed components that you can copy and paste into
            your apps.
          </p>
        </div>
        <div class="flex items-center gap-4 text-muted-foreground text-xs">
          <div class="flex items-center gap-1">
            <span aria-hidden="true" class="size-2 rounded-full bg-blue-500" />
            <span>TypeScript</span>
          </div>
          <div class="flex items-center gap-1">
            <StarIcon class="size-3" />
            <span>58.2k</span>
          </div>
          <div class="flex items-center gap-1">
            <CornerUpLeftIcon class="size-3" />
            <span>5.1k</span>
          </div>
        </div>
      </div>
    </PreviewCardPopup>
  </PreviewCard>
</template>
