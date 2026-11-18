<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from '../components/ui/field'
import { Slider } from '../components/ui/slider'
</script>

<template>
  <Field class="items-stretch gap-3">
    <FieldLabel>Country</FieldLabel>
    <Slider :default-value="50" />
    <FieldDescription>This is an optional field</FieldDescription>
  </Field>
</template>
