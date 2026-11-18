<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
</script>

<template>
  <div class="flex items-center gap-4">
    <Avatar v-for="radius in ['rounded-md', 'rounded-xl', 'rounded-full']" :key="radius" :class="radius">
      <AvatarImage
        alt="User"
        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
      />
      <AvatarFallback>AV</AvatarFallback>
    </Avatar>
  </div>
</template>
