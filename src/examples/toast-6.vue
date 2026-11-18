<script setup lang="ts">
import { Button } from '../components/ui/button'
import { toastManager } from '../components/ui/toast'

const TEXTS = [
  'Short message.',
  'A bit longer message that spans two lines.',
  'This is a longer description that intentionally takes more vertical space to demonstrate stacking with varying heights.',
  'An even longer description that should span multiple lines so we can verify the clamped collapsed height and smooth expansion animation when hovering or focusing the viewport.',
]

let count = 0

function createToast() {
  count++
  toastManager.add({
    description: TEXTS[Math.floor(Math.random() * TEXTS.length)],
    title: `Toast ${count} created`,
  })
}
</script>

<template>
  <Button variant="outline" @click="createToast">
    With Varying Heights
  </Button>
</template>
