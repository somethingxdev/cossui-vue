<script setup lang="ts">
import { BellIcon, UserIcon } from '@lucide/vue'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Button } from '../components/ui/button'
import {
  Popover,
  PopoverCreateHandle,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from '../components/ui/popover'

const popoverHandle = PopoverCreateHandle<'notifications' | 'profile'>()
</script>

<template>
  <div class="flex gap-2">
    <PopoverTrigger
      :as="Button"
      aria-label="Notifications"
      :handle="popoverHandle"
      payload="notifications"
      size="icon"
      variant="outline"
    >
      <BellIcon aria-hidden="true" />
    </PopoverTrigger>
    <PopoverTrigger
      :as="Button"
      aria-label="Profile"
      :handle="popoverHandle"
      payload="profile"
      size="icon"
      variant="outline"
    >
      <UserIcon aria-hidden="true" />
    </PopoverTrigger>
    <Popover v-slot="{ payload }" :handle="popoverHandle">
      <PopoverPopup
        :aria-label="payload === 'profile' ? 'Profile' : 'Notifications'"
        class="min-w-none"
      >
        <div v-if="payload === 'profile'" class="w-48">
          <div class="flex items-center gap-3">
            <Avatar>
              <AvatarImage
                alt="Mark Andersson"
                src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
              />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
            <div class="min-w-0 flex-1">
              <h4 class="line-clamp-1 font-medium text-sm">
                Mark Andersson
              </h4>
              <div class="flex items-center gap-3 text-muted-foreground text-xs">
                Product Designer
              </div>
            </div>
          </div>
          <Button class="mt-3 w-full" size="sm" variant="outline">
            Log out
          </Button>
        </div>
        <template v-else>
          <PopoverTitle class="text-base">
            Notifications
          </PopoverTitle>
          <PopoverDescription>
            You have no new notifications at this time.
          </PopoverDescription>
        </template>
      </PopoverPopup>
    </Popover>
  </div>
</template>
