<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as DialogPrimitive from '@ui-sdk/vue/dialog'
import { cn } from '../../../lib/utils'

type DialogBackdropProps = InstanceType<typeof DialogPrimitive.DialogBackdrop>['$props']

interface Props extends /* @vue-ignore */ DialogBackdropProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DialogPrimitive.DialogBackdrop
    :class="cn(
      'fixed inset-0 z-50 bg-black/32 backdrop-blur-sm transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute',
      props.class,
    )"
  />
</template>
