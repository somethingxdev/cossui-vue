<script setup lang="ts">
import type { AlertDialogTriggerProps } from '@vase-ui/vue/alert-dialog'
import { AlertDialog as AlertDialogPrimitive } from '@vase-ui/vue/alert-dialog'

interface Props extends /* @vue-ignore */ AlertDialogTriggerProps {}

defineProps<Props>()
</script>

<template>
  <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger">
    <slot />
  </AlertDialogPrimitive.Trigger>
</template>
