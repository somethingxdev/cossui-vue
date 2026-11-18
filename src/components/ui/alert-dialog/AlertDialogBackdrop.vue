<script setup lang="ts">
import type { AlertDialogBackdropProps } from '@vase-ui/vue/alert-dialog'
import type { HTMLAttributes } from 'vue'
import { AlertDialog as AlertDialogPrimitive } from '@vase-ui/vue/alert-dialog'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ AlertDialogBackdropProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogPrimitive.Backdrop
    data-slot="alert-dialog-backdrop"
    :class="cn(
      'fixed inset-0 z-50 bg-black/32 backdrop-blur-sm transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute',
      props.class,
    )"
  />
</template>
