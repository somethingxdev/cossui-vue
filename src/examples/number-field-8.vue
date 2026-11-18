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
  <NumberField :default-value="0" :format="{ currency: 'USD', style: 'currency' }">
    <NumberFieldGroup>
      <NumberFieldDecrement />
      <NumberFieldInput aria-label="Amount in USD" />
      <NumberFieldIncrement />
    </NumberFieldGroup>
  </NumberField>
</template>
