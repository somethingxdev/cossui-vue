<script setup lang="ts">
import { shallowRef } from 'vue'
import { Textarea } from '../components/ui/textarea'

const message = shallowRef('')
</script>

<template>
  <div class="grid w-full max-w-xs gap-4">
    <Textarea v-model:value="message" placeholder="Type your message here" aria-label="Message" />
    <Textarea size="sm" placeholder="Small" aria-label="Small message" />
  </div>
</template>
