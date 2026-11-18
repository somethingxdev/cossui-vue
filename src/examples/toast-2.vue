<script setup lang="ts">
import { Button } from '../components/ui/button'
import { toastManager } from '../components/ui/toast'
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Button
      variant="outline"
      @click="toastManager.add({
        description: 'Your changes have been saved.',
        title: 'Success!',
        type: 'success',
      })"
    >
      Success Toast
    </Button>
    <Button
      variant="outline"
      @click="toastManager.add({
        description: 'There was a problem with your request.',
        title: 'Uh oh! Something went wrong.',
        type: 'error',
      })"
    >
      Error Toast
    </Button>
    <Button
      variant="outline"
      @click="toastManager.add({
        description: 'You can add components to your app using the cli.',
        title: 'Heads up!',
        type: 'info',
      })"
    >
      Info Toast
    </Button>
    <Button
      variant="outline"
      @click="toastManager.add({
        description: 'Your session is about to expire.',
        title: 'Warning!',
        type: 'warning',
      })"
    >
      Warning Toast
    </Button>
  </div>
</template>
