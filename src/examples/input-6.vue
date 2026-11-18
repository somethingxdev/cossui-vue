<script setup lang="ts">
import { useId } from 'vue'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

const id = useId()
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <Label :for="id">Email</Label>
    <Input :id="id" aria-label="Email" placeholder="you@example.com" type="email" />
  </div>
</template>
