<script setup lang="ts">
import { Field, FieldError, FieldLabel } from '../components/ui/field'
import { Input } from '../components/ui/input'
</script>

<template>
  <Field>
    <FieldLabel>
      Password <span class="text-destructive-foreground">*</span>
    </FieldLabel>
    <Input placeholder="Enter password" required type="password" />
    <FieldError>Please fill out this field.</FieldError>
  </Field>
</template>
