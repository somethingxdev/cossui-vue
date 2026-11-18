<script setup lang="ts">
import { Label } from '../components/ui/label'
import { Radio, RadioGroup } from '../components/ui/radio-group'
</script>

<template>
  <RadioGroup aria-label="Subscription plan" default-value="r-1">
    <div class="flex items-start gap-2">
      <Radio id="radio-group-3-free" value="r-1" />
      <div class="flex flex-col gap-1">
        <Label for="radio-group-3-free">Free</Label>
        <p class="text-muted-foreground text-xs">
          Basic features for personal use.
        </p>
      </div>
    </div>
    <div class="flex items-start gap-2">
      <Radio id="radio-group-3-pro" value="r-2" />
      <div class="flex flex-col gap-1">
        <Label for="radio-group-3-pro">Pro</Label>
        <p class="text-muted-foreground text-xs">
          Advanced tools for professionals.
        </p>
      </div>
    </div>
  </RadioGroup>
</template>
