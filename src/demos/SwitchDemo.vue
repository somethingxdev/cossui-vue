<script setup lang="ts">
import { useId } from 'vue'
import { Label } from '../components/ui/label'
import { Switch } from '../components/ui/switch'

const descriptionId = useId()
const cardId = useId()
</script>

<template>
  <div class="flex max-w-sm flex-col gap-6">
    <Label>
      <Switch />
      Marketing emails
    </Label>

    <div class="flex items-start gap-2">
      <Switch :id="descriptionId" default-checked />
      <div class="flex flex-col gap-1">
        <Label :for="descriptionId">Marketing emails</Label>
        <p class="text-muted-foreground text-xs">
          By enabling marketing emails, you agree to receive emails.
        </p>
      </div>
    </div>

    <Switch
      aria-label="Notifications"
      class="[--thumb-size:--spacing(4)] sm:[--thumb-size:--spacing(3)]"
    />

    <Label
      class="flex items-center gap-6 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50"
      :for="cardId"
    >
      <div class="flex flex-col gap-1">
        <p>Enable notifications</p>
        <p class="text-muted-foreground text-xs">
          You can enable or disable notifications at any time.
        </p>
      </div>
      <Switch
        :id="cardId"
        class="[--thumb-size:--spacing(4)] sm:[--thumb-size:--spacing(3)]"
        default-checked
      />
    </Label>
  </div>
</template>
