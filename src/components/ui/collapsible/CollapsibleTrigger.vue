<script setup lang="ts">
import * as CollapsiblePrimitive from '@ui-sdk/vue/collapsible'

type CollapsibleTriggerProps = InstanceType<typeof CollapsiblePrimitive.CollapsibleTrigger>['$props']

interface Props extends /* @vue-ignore */ CollapsibleTriggerProps {}

defineProps<Props>()
</script>

<template>
  <CollapsiblePrimitive.CollapsibleTrigger>
    <slot />
  </CollapsiblePrimitive.CollapsibleTrigger>
</template>
