<script setup lang="ts">
import { Field, FieldLabel } from '../components/ui/field'
import { Slider, SliderValue } from '../components/ui/slider'
</script>

<template>
  <Field class="w-full max-w-64">
    <Slider :default-value="50">
      <div class="mb-2 flex items-center justify-between gap-1">
        <FieldLabel class="font-medium text-sm">
          Opacity
        </FieldLabel>
        <SliderValue />
      </div>
    </Slider>
  </Field>
</template>
