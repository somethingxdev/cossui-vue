<script setup lang="ts">
import type { AlertDialogViewportProps } from '@vase-ui/vue/alert-dialog'
import type { HTMLAttributes } from 'vue'
import { AlertDialog as AlertDialogPrimitive } from '@vase-ui/vue/alert-dialog'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ AlertDialogViewportProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogPrimitive.Viewport
    data-slot="alert-dialog-viewport"
    :class="cn('fixed inset-0 z-50 grid grid-rows-[1fr_auto_3fr] justify-items-center p-4', props.class)"
  >
    <slot />
  </AlertDialogPrimitive.Viewport>
</template>
