<script setup lang="ts">
import type { PopoverTriggerProps } from '@vase-ui/vue/popover'
import { Popover as PopoverPrimitive } from '@vase-ui/vue/popover'

interface Props extends /* @vue-ignore */ PopoverTriggerProps {}

defineProps<Props>()
</script>

<template>
  <PopoverPrimitive.Trigger data-slot="popover-trigger">
    <slot />
  </PopoverPrimitive.Trigger>
</template>
