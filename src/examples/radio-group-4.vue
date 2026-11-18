<script setup lang="ts">
import { Label } from '../components/ui/label'
import { Radio, RadioGroup } from '../components/ui/radio-group'
</script>

<template>
  <RadioGroup aria-label="Notification method" default-value="r-1">
    <Label class="flex items-start gap-2 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50">
      <Radio value="r-1" />
      <div class="flex flex-col gap-1">
        <p>Email</p>
        <p class="text-muted-foreground text-xs">
          Receive notifications via email.
        </p>
      </div>
    </Label>
    <Label class="flex items-start gap-2 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50">
      <Radio value="r-2" />
      <div class="flex flex-col gap-1">
        <p>SMS</p>
        <p class="text-muted-foreground text-xs">
          Receive notifications via text message.
        </p>
      </div>
    </Label>
  </RadioGroup>
</template>
