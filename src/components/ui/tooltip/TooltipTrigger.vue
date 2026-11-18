<script setup lang="ts">
import type { TooltipTriggerProps } from '@vase-ui/vue/tooltip'
import { Tooltip as TooltipPrimitive } from '@vase-ui/vue/tooltip'

interface Props extends /* @vue-ignore */ TooltipTriggerProps {}

defineProps<Props>()
</script>

<template>
  <TooltipPrimitive.Trigger data-slot="tooltip-trigger">
    <slot />
  </TooltipPrimitive.Trigger>
</template>
