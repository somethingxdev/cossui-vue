<script setup lang="ts">
import type { PopoverCloseProps } from '@vase-ui/vue/popover'
import { Popover as PopoverPrimitive } from '@vase-ui/vue/popover'

interface Props extends /* @vue-ignore */ PopoverCloseProps {}

defineProps<Props>()
</script>

<template>
  <PopoverPrimitive.Close data-slot="popover-close">
    <slot />
  </PopoverPrimitive.Close>
</template>
