<script setup lang="ts">
import { Button } from '../components/ui/button'
import { toastManager } from '../components/ui/toast'

function performAction() {
  const id = toastManager.add({
    actionProps: {
      children: 'Undo',
      onClick: () => {
        toastManager.close(id)
        toastManager.add({
          description: 'The action has been reverted.',
          title: 'Action undone',
          type: 'info',
        })
      },
    },
    description: 'You can undo this action.',
    timeout: 1000000,
    title: 'Action performed',
    type: 'success',
  })
}
</script>

<template>
  <Button variant="outline" @click="performAction">
    Perform Action
  </Button>
</template>
