<script setup lang="ts">
import { useId } from 'vue'
import { Checkbox } from '../components/ui/checkbox'
import { Label } from '../components/ui/label'

const id = useId()
</script>

<template>
  <div class="flex max-w-sm flex-col gap-6">
    <Label>
      <Checkbox />
      Accept terms and conditions
    </Label>

    <Label>
      <Checkbox default-checked disabled />
      Accept terms and conditions
    </Label>

    <div class="flex items-start gap-2">
      <Checkbox :id="id" default-checked />
      <div class="flex flex-col gap-1">
        <Label :for="id">Accept terms and conditions</Label>
        <p class="text-muted-foreground text-xs">
          By clicking this checkbox, you agree to the terms and conditions.
        </p>
      </div>
    </div>

    <Label class="flex items-start gap-2 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50">
      <Checkbox default-checked />
      <div class="flex flex-col gap-1">
        <p>Enable notifications</p>
        <p class="text-muted-foreground text-xs">
          You can enable or disable notifications at any time.
        </p>
      </div>
    </Label>
  </div>
</template>
