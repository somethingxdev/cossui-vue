<script setup lang="ts">
import { useId } from 'vue'
import { Label } from '../components/ui/label'
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from '../components/ui/number-field'

const id = useId()
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <Label :for="id">Quantity</Label>
    <NumberField :id="id" :default-value="0">
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  </div>
</template>
