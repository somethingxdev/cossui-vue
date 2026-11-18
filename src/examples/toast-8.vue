<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import { Spinner } from '../components/ui/spinner'
import { anchoredToastManager } from '../components/ui/toast'

const isSubmitting = shallowRef(false)
let toastId: string | null = null

function handleSubmit(event: MouseEvent) {
  const anchor = event.currentTarget as Element
  if (isSubmitting.value)
    return

  if (toastId) {
    anchoredToastManager.close(toastId)
    toastId = null
  }

  isSubmitting.value = true

  new Promise<void>((_, reject) => {
    setTimeout(() => {
      isSubmitting.value = false
      reject(new Error('The server is not responding. Please try again later.'))
    }, 2000)
  }).catch((error: Error) => {
    toastId = anchoredToastManager.add({
      description: error.message,
      positionerProps: {
        anchor,
        sideOffset: 4,
      },
      title: 'Error submitting form',
      type: 'error',
    })
  })
}
</script>

<template>
  <Button :disabled="isSubmitting" variant="outline" @click="handleSubmit">
    <template v-if="isSubmitting">
      <Spinner />
      Submitting…
    </template>
    <template v-else>
      Submit
    </template>
  </Button>
</template>
