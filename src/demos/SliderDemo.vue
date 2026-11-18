<script setup lang="ts">
import { shallowRef } from 'vue'
import { Field, FieldLabel } from '../components/ui/field'
import { Slider, SliderValue } from '../components/ui/slider'

const range = shallowRef([25, 75])
</script>

<template>
  <div class="grid max-w-sm gap-10">
    <Slider :get-aria-label="() => 'Value'" :default-value="50" />

    <Field>
      <Slider :default-value="50">
        <div class="mb-2 flex items-center justify-between gap-1">
          <FieldLabel class="font-medium text-sm">
            Opacity
          </FieldLabel>
          <SliderValue />
        </div>
      </Slider>
    </Field>

    <div class="flex flex-col gap-2">
      <Slider
        v-model:value="range"
        :get-aria-label="(index: number) => index === 0 ? 'Minimum value' : 'Maximum value'"
      />
      <p class="text-muted-foreground text-xs">
        Range: {{ range.join(' to ') }}
      </p>
    </div>

    <Slider :default-value="50" disabled />

    <Slider :get-aria-label="() => 'Value'" :default-value="50" orientation="vertical" />
  </div>
</template>
