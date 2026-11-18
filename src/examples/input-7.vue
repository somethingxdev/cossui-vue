<script setup lang="ts">
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
</script>

<template>
  <div aria-label="Email subscription" class="flex gap-2" role="group">
    <Input aria-label="Email" class="flex-1" placeholder="you@example.com" type="email" />
    <div>
      <Button variant="outline">
        Send
      </Button>
    </div>
  </div>
</template>
