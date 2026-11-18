<script setup lang="ts">
import { Button } from '../components/ui/button'
import { toastManager } from '../components/ui/toast'

function showToast() {
  toastManager.add({
    description: 'Monday, January 3rd at 6:00pm',
    title: 'Event has been created',
  })
}
</script>

<template>
  <Button variant="outline" @click="showToast">
    Default Toast
  </Button>
</template>
