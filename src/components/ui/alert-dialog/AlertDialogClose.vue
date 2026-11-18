<script setup lang="ts">
import type { AlertDialogCloseProps } from '@vase-ui/vue/alert-dialog'
import { AlertDialog as AlertDialogPrimitive } from '@vase-ui/vue/alert-dialog'

interface Props extends /* @vue-ignore */ AlertDialogCloseProps {}

defineProps<Props>()
</script>

<template>
  <AlertDialogPrimitive.Close data-slot="alert-dialog-close">
    <slot />
  </AlertDialogPrimitive.Close>
</template>
