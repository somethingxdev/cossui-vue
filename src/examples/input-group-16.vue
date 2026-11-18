<script setup lang="ts">
import { InputGroup, InputGroupAddon, InputGroupText } from '../components/ui/input-group'
import { NumberField, NumberFieldInput } from '../components/ui/number-field'
</script>

<template>
  <InputGroup>
    <NumberField :default-value="10">
      <NumberFieldInput aria-label="Enter the amount" class="text-left" />
    </NumberField>
    <InputGroupAddon>
      <InputGroupText>€</InputGroupText>
    </InputGroupAddon>
    <InputGroupAddon align="inline-end">
      <InputGroupText>EUR</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
</template>
