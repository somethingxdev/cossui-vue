<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as AlertDialogPrimitive from '@ui-sdk/vue/alert-dialog'
import { cn } from '../../../lib/utils'

type AlertDialogBackdropProps = InstanceType<typeof AlertDialogPrimitive.AlertDialogBackdrop>['$props']

interface Props extends /* @vue-ignore */ AlertDialogBackdropProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogPrimitive.AlertDialogBackdrop
    :class="cn(
      'fixed inset-0 z-50 bg-black/32 backdrop-blur-sm transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute',
      props.class,
    )"
  />
</template>
