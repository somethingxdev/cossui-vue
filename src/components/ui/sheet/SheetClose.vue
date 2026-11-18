<script setup lang="ts">
import type { DialogCloseProps } from '@vase-ui/vue/dialog'
import { Dialog as SheetPrimitive } from '@vase-ui/vue/dialog'

interface Props extends /* @vue-ignore */ DialogCloseProps {}

defineProps<Props>()
</script>

<template>
  <SheetPrimitive.Close data-slot="sheet-close">
    <slot />
  </SheetPrimitive.Close>
</template>
