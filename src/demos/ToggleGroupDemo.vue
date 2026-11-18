<script setup lang="ts">
import { BoldIcon, ItalicIcon, UnderlineIcon } from '@lucide/vue'
import { shallowRef } from 'vue'
import { ToggleGroup, ToggleGroupItem, ToggleGroupSeparator } from '../components/ui/toggle-group'

const formats = shallowRef<string[]>(['bold'])
</script>

<template>
  <div class="flex flex-col items-start gap-6">
    <ToggleGroup :default-value="['bold']">
      <ToggleGroupItem aria-label="Toggle bold" value="bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle italic" value="italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle underline" value="underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>

    <ToggleGroup :default-value="['bold']" variant="outline">
      <ToggleGroupItem aria-label="Toggle bold" value="bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupSeparator />
      <ToggleGroupItem aria-label="Toggle italic" value="italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupSeparator />
      <ToggleGroupItem aria-label="Toggle underline" value="underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>

    <ToggleGroup :default-value="['bold']" orientation="vertical" variant="outline">
      <ToggleGroupItem aria-label="Toggle bold" value="bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupSeparator orientation="horizontal" />
      <ToggleGroupItem aria-label="Toggle italic" value="italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupSeparator orientation="horizontal" />
      <ToggleGroupItem aria-label="Toggle underline" value="underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>

    <div class="flex items-center gap-4">
      <ToggleGroup v-model:value="formats" multiple size="sm">
        <ToggleGroupItem aria-label="Toggle bold" value="bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle italic" value="italic">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle underline" value="underline">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <span class="text-muted-foreground text-sm">{{ formats.join(', ') || 'None' }}</span>
    </div>
  </div>
</template>
