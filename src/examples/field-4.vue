<script setup lang="ts">
import { Field, FieldError, FieldLabel } from '../components/ui/field'
import { Input } from '../components/ui/input'
</script>

<template>
  <Field>
    <FieldLabel>Email</FieldLabel>
    <Input placeholder="Enter your email" type="email" />
    <FieldError>Please enter a valid email address.</FieldError>
  </Field>
</template>
