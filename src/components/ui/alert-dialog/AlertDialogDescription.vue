<script setup lang="ts">
import type { AlertDialogDescriptionProps } from '@vase-ui/vue/alert-dialog'
import type { HTMLAttributes } from 'vue'
import { AlertDialog as AlertDialogPrimitive } from '@vase-ui/vue/alert-dialog'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ AlertDialogDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogPrimitive.Description
    data-slot="alert-dialog-description"
    :class="cn('text-muted-foreground text-sm', props.class)"
  >
    <slot />
  </AlertDialogPrimitive.Description>
</template>
