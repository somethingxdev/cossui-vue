<script setup lang="ts">
import type { AlertDialogTitleProps } from '@vase-ui/vue/alert-dialog'
import type { HTMLAttributes } from 'vue'
import { AlertDialog as AlertDialogPrimitive } from '@vase-ui/vue/alert-dialog'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ AlertDialogTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogPrimitive.Title
    data-slot="alert-dialog-title"
    :class="cn('font-bold font-heading text-xl leading-none', props.class)"
  >
    <slot />
  </AlertDialogPrimitive.Title>
</template>
