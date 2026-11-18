<script setup lang="ts">
import { onErrorCaptured, shallowRef } from 'vue'

const error = shallowRef<unknown>()

// One broken demo must not blank the whole docs page.
onErrorCaptured((cause) => {
  error.value = cause
  console.error(cause)
  return false
})
</script>

<template>
  <p v-if="error" class="text-destructive-foreground text-sm">
    This demo failed to render.
  </p>
  <slot v-else />
</template>
