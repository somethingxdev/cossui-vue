<script setup lang="ts">
import { Field, FieldDescription, FieldError, FieldLabel } from '../components/ui/field'
import { Input } from '../components/ui/input'
</script>

<template>
  <Field class="w-full max-w-80">
    <FieldLabel>Email</FieldLabel>
    <Input placeholder="Enter your email" required type="email" />
    <FieldError />
    <FieldDescription v-slot="{ state }" class="w-full rounded-md bg-muted p-2 text-foreground">
      <code class="block max-h-60 overflow-y-auto whitespace-pre font-mono text-xs [scrollbar-width:none]">{{ JSON.stringify({ required: state.required, focused: state.focused, invalid: state.invalid, valid: state.valid }, null, 2) }}</code>
    </FieldDescription>
  </Field>
</template>
