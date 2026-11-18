<script setup lang="ts">
import { useId } from 'vue'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'

const id = useId()
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <Label :for="id">Message</Label>
    <Textarea :id="id" placeholder="Type your message here" />
  </div>
</template>
