<script setup lang="ts">
import type { DialogTriggerProps } from '@vase-ui/vue/dialog'
import { Dialog as SheetPrimitive } from '@vase-ui/vue/dialog'

interface Props extends /* @vue-ignore */ DialogTriggerProps {}

defineProps<Props>()
</script>

<template>
  <SheetPrimitive.Trigger data-slot="sheet-trigger">
    <slot />
  </SheetPrimitive.Trigger>
</template>
