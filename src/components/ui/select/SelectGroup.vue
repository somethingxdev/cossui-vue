<script setup lang="ts">
import type { SelectGroupProps } from '@vase-ui/vue/select'
import { Select as SelectPrimitive } from '@vase-ui/vue/select'

interface Props extends /* @vue-ignore */ SelectGroupProps {}

defineProps<Props>()
</script>

<template>
  <SelectPrimitive.Group data-slot="select-group">
    <slot />
  </SelectPrimitive.Group>
</template>
