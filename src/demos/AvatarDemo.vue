<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from '../components/ui/avatar'

const sizes = [
  '[--avatar-size:--spacing(4)]',
  '[--avatar-size:--spacing(6)]',
  '[--avatar-size:--spacing(8)]',
  '[--avatar-size:--spacing(10)]',
  '[--avatar-size:--spacing(12)]',
]

const people = [
  { alt: 'Frida Kahlo', initials: 'FK', src: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=96&h=96&dpr=2&q=80' },
  { alt: 'Nadia Ekman', initials: 'NE', src: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=96&h=96&dpr=2&q=80' },
  { alt: 'Eli Wren', initials: 'EW', src: 'https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?w=96&h=96&dpr=2&q=80' },
]
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex items-center gap-4">
      <Avatar>
        <AvatarImage
          alt="Luke Tracy"
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
        />
        <AvatarFallback>LT</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>LT</AvatarFallback>
      </Avatar>
    </div>

    <div class="flex items-center gap-4">
      <Avatar v-for="size in sizes" :key="size" :class="size">
        <AvatarImage
          alt="User"
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=144&h=144&dpr=2&q=80"
        />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
    </div>

    <AvatarGroup>
      <Avatar v-for="person in people" :key="person.alt">
        <AvatarImage :alt="person.alt" :src="person.src" />
        <AvatarFallback>{{ person.initials }}</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+2</AvatarGroupCount>
    </AvatarGroup>

    <AvatarGroup topmost="last">
      <Avatar v-for="person in people" :key="person.alt">
        <AvatarImage :alt="person.alt" :src="person.src" />
        <AvatarFallback>{{ person.initials }}</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+2</AvatarGroupCount>
    </AvatarGroup>
  </div>
</template>
