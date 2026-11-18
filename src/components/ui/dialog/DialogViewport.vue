<script setup lang="ts">
import type { DialogViewportProps } from '@vase-ui/vue/dialog'
import type { HTMLAttributes } from 'vue'
import { Dialog as DialogPrimitive } from '@vase-ui/vue/dialog'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ DialogViewportProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DialogPrimitive.Viewport
    data-slot="dialog-viewport"
    :class="cn('fixed inset-0 z-50 grid grid-rows-[1fr_auto_3fr] justify-items-center p-4', props.class)"
  >
    <slot />
  </DialogPrimitive.Viewport>
</template>
