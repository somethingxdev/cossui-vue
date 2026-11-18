<script setup lang="ts">
import type { CollapsibleTriggerProps } from '@vase-ui/vue/collapsible'
import { Collapsible as CollapsiblePrimitive } from '@vase-ui/vue/collapsible'

interface Props extends /* @vue-ignore */ CollapsibleTriggerProps {}

defineProps<Props>()
</script>

<template>
  <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger">
    <slot />
  </CollapsiblePrimitive.Trigger>
</template>
