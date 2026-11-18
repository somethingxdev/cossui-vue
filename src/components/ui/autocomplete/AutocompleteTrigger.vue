<script setup lang="ts">
import * as AutocompletePrimitive from '@ui-sdk/vue/autocomplete'

type AutocompleteTriggerProps = InstanceType<typeof AutocompletePrimitive.AutocompleteTrigger>['$props']

interface Props extends /* @vue-ignore */ AutocompleteTriggerProps {}

defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.AutocompleteTrigger>
    <slot />
  </AutocompletePrimitive.AutocompleteTrigger>
</template>
