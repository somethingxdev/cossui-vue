<script setup lang="ts">
import type { DialogCloseProps } from '@vase-ui/vue/dialog'
import { Dialog as DialogPrimitive } from '@vase-ui/vue/dialog'

interface Props extends /* @vue-ignore */ DialogCloseProps {}

defineProps<Props>()
</script>

<template>
  <DialogPrimitive.Close data-slot="dialog-close">
    <slot />
  </DialogPrimitive.Close>
</template>
