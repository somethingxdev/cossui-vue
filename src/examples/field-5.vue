<script setup lang="ts">
import { Field, FieldLabel, FieldValidity } from '../components/ui/field'
import { Input } from '../components/ui/input'
</script>

<template>
  <Field class="w-full max-w-80">
    <FieldLabel>Email</FieldLabel>
    <Input placeholder="Enter your email" required type="email" />
    <FieldValidity v-slot="validity">
      <div class="flex w-full flex-col gap-2">
        <p v-if="validity.error" class="text-destructive-foreground text-xs">
          {{ validity.error }}
        </p>
        <div class="w-full rounded-md bg-muted p-2">
          <pre class="max-h-60 overflow-y-auto font-mono text-xs [scrollbar-width:none]">{{ JSON.stringify(validity, null, 2) }}</pre>
        </div>
      </div>
    </FieldValidity>
  </Field>
</template>
