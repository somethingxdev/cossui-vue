<script setup lang="ts">
import type { DialogTriggerProps } from '@vase-ui/vue/dialog'
import { Dialog as DialogPrimitive } from '@vase-ui/vue/dialog'

interface Props extends /* @vue-ignore */ DialogTriggerProps {}

defineProps<Props>()
</script>

<template>
  <DialogPrimitive.Trigger data-slot="dialog-trigger">
    <slot />
  </DialogPrimitive.Trigger>
</template>
