<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from '../components/ui/field'
import { Textarea } from '../components/ui/textarea'
</script>

<template>
  <Field>
    <FieldLabel>Bio</FieldLabel>
    <Textarea :maxlength="500" placeholder="Tell us about yourself…" />
    <FieldDescription>
      Write a short bio. Maximum 500 characters.
    </FieldDescription>
  </Field>
</template>
