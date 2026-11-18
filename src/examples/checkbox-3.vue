<script setup lang="ts">
import { Checkbox } from '../components/ui/checkbox'
import { Label } from '../components/ui/label'
</script>

<template>
  <div class="flex items-start gap-2">
    <Checkbox id="checkbox-3-terms" default-checked />
    <div class="flex flex-col gap-1">
      <Label for="checkbox-3-terms">Accept terms and conditions</Label>
      <p class="text-muted-foreground text-xs">
        By clicking this checkbox, you agree to the terms and conditions.
      </p>
    </div>
  </div>
</template>
