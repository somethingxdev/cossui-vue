<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from '../components/ui/field'
import { Input } from '../components/ui/input'
</script>

<template>
  <Field>
    <FieldLabel>Name</FieldLabel>
    <Input placeholder="Enter your name" type="text" />
    <FieldDescription>Visible on your profile</FieldDescription>
  </Field>
</template>
