<script setup lang="ts">
import { PlusIcon } from '@lucide/vue'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'

const loading = shallowRef(false)

function simulateRequest(): void {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1500)
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Button>Default</Button>
    <Button variant="outline">
      Outline
    </Button>
    <Button variant="secondary">
      Secondary
    </Button>
    <Button variant="ghost">
      Ghost
    </Button>
    <Button variant="destructive">
      Destructive
    </Button>
    <Button variant="destructive-outline">
      Destructive outline
    </Button>
    <Button variant="link">
      Link
    </Button>
    <Button size="icon" variant="outline" aria-label="Add">
      <PlusIcon />
    </Button>
    <Button :loading="loading" @click="simulateRequest">
      Save
    </Button>
    <Button disabled>
      Disabled
    </Button>
    <Button as="a" href="#button" variant="outline">
      As link
    </Button>
  </div>
</template>
