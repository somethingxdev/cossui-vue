<script setup lang="ts">
import type { DialogBackdropProps } from '@vase-ui/vue/dialog'
import type { HTMLAttributes } from 'vue'
import { Dialog as SheetPrimitive } from '@vase-ui/vue/dialog'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ DialogBackdropProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SheetPrimitive.Backdrop
    data-slot="sheet-backdrop"
    :class="cn(
      'fixed inset-0 z-50 bg-black/32 backdrop-blur-sm transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute',
      props.class,
    )"
  />
</template>
