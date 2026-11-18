<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from '../components/ui/field'
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const items = [
  { label: 'Select a country', value: null },
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
  { label: 'Australia', value: 'au' },
]
</script>

<template>
  <Field>
    <FieldLabel>Country</FieldLabel>
    <Select :items="items">
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        <SelectItem v-for="{ label, value } in items" :key="String(value)" :value="value">
          {{ label }}
        </SelectItem>
      </SelectPopup>
    </Select>
    <FieldDescription>This is an optional field</FieldDescription>
  </Field>
</template>
