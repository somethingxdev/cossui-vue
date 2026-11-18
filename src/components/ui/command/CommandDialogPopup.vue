<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as DialogPrimitive from '@ui-sdk/vue/dialog'
import { cn } from '../../../lib/utils'
import { DialogBackdrop } from '../dialog'

type DialogContentProps = InstanceType<typeof DialogPrimitive.DialogContent>['$props']

interface Props extends /* @vue-ignore */ DialogContentProps {
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()
</script>

<template>
  <DialogBackdrop />
  <!-- The content sits in the top layer, so it places itself where coss ui's viewport does. -->
  <DialogPrimitive.DialogContent
    v-bind="$attrs"
    :class="cn(
      'fixed inset-x-0 top-[max(--spacing(4),4vh)] z-50 mx-auto flex max-h-105 min-h-0 w-[calc(100%-2rem)] min-w-0 max-w-xl -translate-y-[calc(1.25rem*var(--dialog-stack))] scale-[calc(1-0.1*var(--dialog-stack))] flex-col rounded-2xl border bg-popover not-dark:bg-clip-padding text-popover-foreground opacity-[calc(1-0.1*var(--dialog-stack))] shadow-lg/5 outline-none transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:bg-muted/72 before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0 sm:top-[10vh] **:data-[slot=scroll-area-viewport]:data-overflow-y:pe-1 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
      props.class,
    )"
  >
    <slot />
  </DialogPrimitive.DialogContent>
</template>
