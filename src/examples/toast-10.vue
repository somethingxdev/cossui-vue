<script setup lang="ts">
import { Button } from '../components/ui/button'
import { toastManager } from '../components/ui/toast'

const DEDUP_ID = 'coss-demo-dedup-toast'

function showToast() {
  toastManager.add({
    description: 'Repeated clicks update this toast instead of stacking another.',
    id: DEDUP_ID,
    title: 'Saved',
    type: 'success',
  })
}
</script>

<template>
  <Button variant="outline" @click="showToast">
    One Success Toast
  </Button>
</template>
