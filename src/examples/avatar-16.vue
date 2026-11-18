<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from '../components/ui/avatar'

const people = [
  { name: 'Frida Kahlo', initials: 'FK', src: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=96&h=96&dpr=2&q=80' },
  { name: 'Nadia Ekman', initials: 'NE', src: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=96&h=96&dpr=2&q=80' },
  { name: 'Eli Wren', initials: 'EW', src: 'https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?w=96&h=96&dpr=2&q=80' },
]
</script>

<template>
  <AvatarGroup topmost="last">
    <Avatar v-for="person in people" :key="person.name">
      <AvatarImage :alt="person.name" :src="person.src" />
      <AvatarFallback>{{ person.initials }}</AvatarFallback>
    </Avatar>
    <AvatarGroupCount>+2</AvatarGroupCount>
  </AvatarGroup>
</template>
