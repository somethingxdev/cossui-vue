<script setup lang="ts">
import { Label } from '../components/ui/label'
import { Switch } from '../components/ui/switch'
</script>

<template>
  <div class="flex items-start gap-2">
    <Switch id="switch-3-marketing" default-checked />
    <div class="flex flex-col gap-1">
      <Label for="switch-3-marketing">Marketing emails</Label>
      <p class="text-muted-foreground text-xs">
        By enabling marketing emails, you agree to receive emails.
      </p>
    </div>
  </div>
</template>
