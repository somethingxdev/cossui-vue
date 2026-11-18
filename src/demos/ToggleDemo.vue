<script setup lang="ts">
import { BoldIcon, ItalicIcon, UnderlineIcon } from '@lucide/vue'
import { shallowRef } from 'vue'
import { Toggle } from '../components/ui/toggle'

const bold = shallowRef(false)
</script>

<template>
  <div class="flex flex-col items-start gap-6">
    <div class="flex items-center gap-2">
      <Toggle>Toggle</Toggle>
      <Toggle variant="outline">
        Outline Toggle
      </Toggle>
      <Toggle disabled variant="outline">
        Disabled
      </Toggle>
    </div>

    <div class="flex items-center gap-2">
      <Toggle aria-label="Toggle bold" size="sm" variant="outline">
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Toggle bold" variant="outline">
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Toggle bold" size="lg" variant="outline">
        <BoldIcon />
      </Toggle>
    </div>

    <div class="flex items-center gap-1">
      <Toggle v-model:pressed="bold" aria-label="Toggle bold" variant="outline">
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic" variant="outline">
        <ItalicIcon />
      </Toggle>
      <Toggle aria-label="Toggle underline" variant="outline">
        <UnderlineIcon />
      </Toggle>
      <span class="ms-2 text-muted-foreground text-sm">Bold: {{ bold ? 'on' : 'off' }}</span>
    </div>
  </div>
</template>
