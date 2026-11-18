<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'

const loading = shallowRef(false)

function submit(): void {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1000)
}
</script>

<template>
  <Button :loading="loading" @click="submit">
    Submit
  </Button>
</template>
