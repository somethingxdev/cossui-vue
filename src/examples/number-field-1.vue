<script setup lang="ts">
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from '../components/ui/number-field'
</script>

<template>
  <NumberField :default-value="0">
    <NumberFieldGroup>
      <NumberFieldDecrement />
      <NumberFieldInput aria-label="Quantity" />
      <NumberFieldIncrement />
    </NumberFieldGroup>
  </NumberField>
</template>
