<script setup lang="ts">
import { Label } from '../components/ui/label'
import { Switch } from '../components/ui/switch'
</script>

<template>
  <Label
    class="flex items-center gap-6 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50"
    for="switch-4-notifications"
  >
    <div class="flex flex-col gap-1">
      <p>Enable notifications</p>
      <p class="text-muted-foreground text-xs">
        You can enable or disable notifications at any time.
      </p>
    </div>
    <Switch
      id="switch-4-notifications"
      class="[--thumb-size:--spacing(4)] sm:[--thumb-size:--spacing(3)]"
      default-checked
    />
  </Label>
</template>
