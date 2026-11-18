<script setup lang="ts">
import { Field, FieldDescription } from '../components/ui/field'
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from '../components/ui/number-field'
</script>

<template>
  <Field>
    <NumberField :default-value="1" :max="100" :min="1">
      <NumberFieldScrubArea label="Quantity" />
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
    <FieldDescription>Choose a value between 1 and 100.</FieldDescription>
  </Field>
</template>
