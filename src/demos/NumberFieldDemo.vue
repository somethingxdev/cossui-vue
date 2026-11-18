<script setup lang="ts">
import { shallowRef, useId } from 'vue'
import { Label } from '../components/ui/label'
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from '../components/ui/number-field'

const id = useId()
const quantity = shallowRef<number | null>(0)
</script>

<template>
  <div class="grid max-w-56 gap-6">
    <NumberField v-model:value="quantity">
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput aria-label="Quantity" />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>

    <NumberField :default-value="0" size="sm">
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput aria-label="Quantity" />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>

    <div class="flex flex-col items-start gap-2">
      <Label :for="id">Quantity</Label>
      <NumberField :id="id" :default-value="0" size="lg">
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </div>

    <NumberField :default-value="0">
      <NumberFieldScrubArea label="Quantity" />
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>

    <NumberField :default-value="0" :format="{ currency: 'USD', style: 'currency' }">
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput aria-label="Amount in USD" />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  </div>
</template>
