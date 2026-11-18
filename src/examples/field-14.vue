<script setup lang="ts">
import { Field, FieldDescription, FieldItem, FieldLabel } from '../components/ui/field'
import { Fieldset, FieldsetLegend } from '../components/ui/fieldset'
import { Radio, RadioGroup } from '../components/ui/radio-group'
</script>

<template>
  <Field :as="Fieldset" class="gap-2" name="plan">
    <FieldsetLegend class="font-medium text-sm">
      Choose Plan
    </FieldsetLegend>
    <RadioGroup default-value="free">
      <FieldItem>
        <FieldLabel>
          <Radio value="free" /> Free
        </FieldLabel>
      </FieldItem>
      <FieldItem>
        <FieldLabel>
          <Radio value="pro" /> Pro
        </FieldLabel>
      </FieldItem>
      <FieldItem>
        <FieldLabel>
          <Radio value="enterprise" /> Enterprise
        </FieldLabel>
      </FieldItem>
    </RadioGroup>
    <FieldDescription>Select the plan that fits your needs.</FieldDescription>
  </Field>
</template>
