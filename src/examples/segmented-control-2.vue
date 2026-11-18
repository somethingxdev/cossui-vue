<script setup lang="ts">
import { RadioGroupPrimitive, RadioPrimitive } from '../components/ui/radio-group'
import { SegmentedControl, SegmentedControlItem } from '../components/ui/segmented-control'
</script>

<template>
  <SegmentedControl
    :as="RadioGroupPrimitive.RadioGroup"
    aria-label="Billing period"
    default-value="monthly"
    size="sm"
  >
    <SegmentedControlItem :as="RadioPrimitive.Radio" class="grow" value="monthly">
      Monthly
    </SegmentedControlItem>
    <SegmentedControlItem :as="RadioPrimitive.Radio" class="grow" value="yearly">
      Yearly
    </SegmentedControlItem>
  </SegmentedControl>
</template>
