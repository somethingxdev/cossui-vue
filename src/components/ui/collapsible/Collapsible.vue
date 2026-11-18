<script setup lang="ts">
import * as CollapsiblePrimitive from '@ui-sdk/vue/collapsible'

type CollapsibleProps = InstanceType<typeof CollapsiblePrimitive.Collapsible>['$props']

interface Props extends /* @vue-ignore */ CollapsibleProps {}

defineProps<Props>()
</script>

<template>
  <CollapsiblePrimitive.Collapsible>
    <slot />
  </CollapsiblePrimitive.Collapsible>
</template>
