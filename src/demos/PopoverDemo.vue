<script setup lang="ts">
import { BellIcon, UserIcon, XIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import {
  Popover,
  PopoverClose,
  PopoverCreateHandle,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from '../components/ui/popover'
import { Textarea } from '../components/ui/textarea'

const accountHandle = PopoverCreateHandle<'notifications' | 'profile'>()
</script>

<template>
  <div class="flex flex-wrap items-start gap-2">
    <Popover>
      <PopoverTrigger :as="Button" variant="outline">
        Open Popover
      </PopoverTrigger>
      <PopoverPopup class="w-80">
        <div class="mb-4">
          <PopoverTitle class="text-base">
            Send us feedback
          </PopoverTitle>
          <PopoverDescription>Let us know how we can improve.</PopoverDescription>
        </div>
        <form class="flex w-full flex-col gap-4" @submit.prevent>
          <Textarea id="feedback" aria-label="Send feedback" placeholder="How can we improve?" />
          <Button type="submit">
            Send feedback
          </Button>
        </form>
      </PopoverPopup>
    </Popover>

    <Popover>
      <PopoverTrigger :as="Button" variant="outline">
        With close button
      </PopoverTrigger>
      <PopoverPopup class="w-80">
        <PopoverClose :as="Button" aria-label="Close" class="absolute end-2 top-2" size="icon" variant="ghost">
          <XIcon />
        </PopoverClose>
        <div class="mb-2">
          <PopoverTitle class="text-base">
            Notifications
          </PopoverTitle>
          <PopoverDescription>You are all caught up. Good job!</PopoverDescription>
        </div>
        <PopoverClose :as="Button" variant="outline">
          Close
        </PopoverClose>
      </PopoverPopup>
    </Popover>

    <PopoverTrigger
      :as="Button"
      aria-label="Notifications"
      :handle="accountHandle"
      payload="notifications"
      size="icon"
      variant="outline"
    >
      <BellIcon aria-hidden="true" />
    </PopoverTrigger>
    <PopoverTrigger
      :as="Button"
      aria-label="Profile"
      :handle="accountHandle"
      payload="profile"
      size="icon"
      variant="outline"
    >
      <UserIcon aria-hidden="true" />
    </PopoverTrigger>
    <Popover v-slot="{ payload }" :handle="accountHandle">
      <PopoverPopup :aria-label="payload === 'profile' ? 'Profile' : 'Notifications'">
        <div v-if="payload === 'profile'" class="w-48">
          <h4 class="line-clamp-1 font-medium text-sm">
            Mark Andersson
          </h4>
          <p class="text-muted-foreground text-xs">
            Product Designer
          </p>
          <Button class="mt-3 w-full" size="sm" variant="outline">
            Log out
          </Button>
        </div>
        <template v-else-if="payload === 'notifications'">
          <PopoverTitle class="text-base">
            Notifications
          </PopoverTitle>
          <PopoverDescription>You have no new notifications at this time.</PopoverDescription>
        </template>
      </PopoverPopup>
    </Popover>
  </div>
</template>
