<script setup lang="ts">
import { Button } from '../components/ui/button'
import { toastManager } from '../components/ui/toast'

function showToast() {
  toastManager.add({
    description: 'Please wait while we process your request.',
    title: 'Loading…',
    type: 'loading',
  })
}
</script>

<template>
  <Button variant="outline" @click="showToast">
    Loading Toast
  </Button>
</template>
