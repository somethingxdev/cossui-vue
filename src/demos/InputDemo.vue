<script setup lang="ts">
import { shallowRef } from 'vue'
import { Input } from '../components/ui/input'

const name = shallowRef('')
</script>

<template>
  <div class="grid w-full max-w-xs gap-4">
    <Input v-model:value="name" placeholder="Your name" aria-label="Name" />
    <Input size="sm" placeholder="Small" aria-label="Small" />
    <Input size="lg" type="search" placeholder="Large search" aria-label="Search" />
    <Input disabled placeholder="Disabled" aria-label="Disabled" />
    <Input aria-invalid="true" placeholder="Invalid" aria-label="Invalid" />
  </div>
</template>
