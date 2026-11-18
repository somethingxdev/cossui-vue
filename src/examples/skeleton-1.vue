<script setup lang="ts">
import { UserRoundPlusIcon, UsersRoundIcon } from '@lucide/vue'
import { useTimeout } from '@vueuse/core'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Button } from '../components/ui/button'
import { Skeleton } from '../components/ui/skeleton'

const users = [
  {
    delay: 3000,
    fallback: 'SJ',
    followers: '15k',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&dpr=2&q=80',
    name: 'Sarah Johnson',
    role: 'Design Engineer',
  },
  {
    delay: 4000,
    fallback: 'MA',
    followers: '8k',
    image: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=80&h=80&dpr=2&q=80',
    name: 'Mark Bennett Andersson',
    role: 'Product Designer',
  },
  {
    delay: 3400,
    fallback: 'AR',
    followers: '12k',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&dpr=2&q=80',
    name: 'Alex Rivera',
    role: 'UI/UX Designer',
  },
].map(user => ({
  ...user,
  loaded: useTimeout(user.delay),
}))
</script>

<template>
  <div class="flex w-full max-w-92 flex-col gap-6">
    <div v-for="user in users" :key="user.fallback" class="flex items-center gap-4">
      <template v-if="user.loaded.value">
        <Avatar class="[--avatar-size:--spacing(10)]">
          <AvatarImage :alt="user.name" :src="user.image" />
          <AvatarFallback>{{ user.fallback }}</AvatarFallback>
        </Avatar>
        <div class="flex min-w-0 flex-1 flex-col gap-1">
          <h4 class="line-clamp-1 font-medium text-sm">
            {{ user.name }}
          </h4>
          <div class="flex items-center gap-3 text-muted-foreground text-xs">
            <span class="truncate">{{ user.role }}</span>
            <div class="flex min-w-0 items-center gap-1">
              <UsersRoundIcon class="size-3 shrink-0" />
              <span class="truncate">
                {{ user.followers }}<span class="max-sm:hidden"> followers</span>
              </span>
            </div>
          </div>
        </div>
        <Button size="xs">
          <UserRoundPlusIcon />
          Follow
        </Button>
      </template>
      <template v-else>
        <Skeleton class="size-10 rounded-full" />
        <div class="flex flex-1 flex-col">
          <Skeleton class="my-0.5 h-4 max-w-54" />
          <div class="flex max-w-54 items-center gap-1">
            <Skeleton class="my-0.5 h-4 w-1/2" />
            <Skeleton class="my-0.5 h-4 w-1/2" />
          </div>
        </div>
        <Skeleton class="h-7 w-19 sm:h-6 sm:w-17" />
      </template>
    </div>
  </div>
</template>
