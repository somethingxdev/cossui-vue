<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'

const sizes = [
  { class: '[--avatar-size:--spacing(4)]', px: 48 },
  { class: '[--avatar-size:--spacing(6)]', px: 72 },
  { class: '[--avatar-size:--spacing(8)]', px: 96 },
  { class: '[--avatar-size:--spacing(10)]', px: 120 },
  { class: '[--avatar-size:--spacing(12)]', px: 144 },
].map(size => ({
  ...size,
  src: `https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=${size.px}&h=${size.px}&dpr=2&q=80`,
}))
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-4">
      <Avatar v-for="size in sizes" :key="size.px" :class="size.class">
        <AvatarImage
          alt="User"
          :src="size.src"
        />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
    </div>
    <div class="flex items-center gap-4">
      <Avatar v-for="size in sizes" :key="size.px" :class="size.class">
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
    </div>
  </div>
</template>
