<script setup lang="ts">
import type { CollapsibleRootProps } from '@vase-ui/vue/collapsible'
import { Collapsible as CollapsiblePrimitive } from '@vase-ui/vue/collapsible'

interface Props extends /* @vue-ignore */ CollapsibleRootProps {}

defineProps<Props>()
</script>

<template>
  <CollapsiblePrimitive.Root data-slot="collapsible">
    <slot />
  </CollapsiblePrimitive.Root>
</template>
