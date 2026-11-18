<script setup lang="ts">
import { Checkbox } from '../components/ui/checkbox'
import { CheckboxGroup } from '../components/ui/checkbox-group'
import { Field, FieldItem, FieldLabel } from '../components/ui/field'
import { Fieldset, FieldsetLegend } from '../components/ui/fieldset'
</script>

<template>
  <Field :as="Fieldset" class="gap-2" name="frameworks">
    <FieldsetLegend class="font-medium text-sm">
      Frameworks
    </FieldsetLegend>
    <CheckboxGroup :default-value="['react']">
      <FieldItem>
        <FieldLabel>
          <Checkbox value="react" /> React
        </FieldLabel>
      </FieldItem>
      <FieldItem>
        <FieldLabel>
          <Checkbox value="vue" /> Vue
        </FieldLabel>
      </FieldItem>
      <FieldItem>
        <FieldLabel>
          <Checkbox value="svelte" /> Svelte
        </FieldLabel>
      </FieldItem>
    </CheckboxGroup>
  </Field>
</template>
