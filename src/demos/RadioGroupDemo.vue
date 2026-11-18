<script setup lang="ts">
import { Label } from '../components/ui/label'
import { Radio, RadioGroup } from '../components/ui/radio-group'
</script>

<template>
  <div class="flex flex-wrap gap-12">
    <RadioGroup aria-label="Framework" default-value="next">
      <Label>
        <Radio value="next" /> Next.js
      </Label>
      <Label>
        <Radio value="vite" /> Vite
      </Label>
      <Label>
        <Radio value="astro" /> Astro
      </Label>
    </RadioGroup>

    <RadioGroup aria-label="Subscription plan" default-value="r-1">
      <div class="flex items-start gap-2">
        <Radio id="r-1" value="r-1" />
        <div class="flex flex-col gap-1">
          <Label for="r-1">Free</Label>
          <p class="text-muted-foreground text-xs">
            Basic features for personal use.
          </p>
        </div>
      </div>
      <div class="flex items-start gap-2">
        <Radio id="r-2" value="r-2" />
        <div class="flex flex-col gap-1">
          <Label for="r-2">Pro</Label>
          <p class="text-muted-foreground text-xs">
            Advanced tools for professionals.
          </p>
        </div>
      </div>
    </RadioGroup>

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
  </div>
</template>
