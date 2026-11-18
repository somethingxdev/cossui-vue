<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { XIcon } from '@lucide/vue'
import * as DialogPrimitive from '@ui-sdk/vue/dialog'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import DialogBackdrop from './DialogBackdrop.vue'

type DialogContentProps = InstanceType<typeof DialogPrimitive.DialogContent>['$props']
type DialogCloseProps = InstanceType<typeof DialogPrimitive.DialogClose>['$props']

interface Props extends /* @vue-ignore */ DialogContentProps {
  showCloseButton?: boolean
  bottomStickOnMobile?: boolean
  closeProps?: DialogCloseProps
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  showCloseButton: true,
  bottomStickOnMobile: true,
})
</script>

<template>
  <DialogBackdrop />
  <!-- The content sits in the top layer, so it places itself: a quarter of the free space above it, as coss ui's viewport grid does. -->
  <DialogPrimitive.DialogContent
    v-bind="$attrs"
    :class="cn(
      'fixed inset-x-0 top-[calc(25dvh+0.5rem)] z-50 mx-auto flex max-h-[calc(100dvh-2rem)] min-h-0 w-[calc(100%-2rem)] min-w-0 max-w-lg origin-center transform-[translateY(-25%)] flex-col rounded-2xl border bg-popover not-dark:bg-clip-padding text-popover-foreground opacity-[calc(1-var(--dialog-stack))] shadow-lg/5 outline-none transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-opacity sm:scale-[calc(1-0.1*var(--dialog-stack))] motion-safe:sm:data-ending-style:scale-98 motion-safe:sm:data-starting-style:scale-98 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
      props.bottomStickOnMobile && 'max-sm:top-auto max-sm:bottom-0 max-sm:max-h-[calc(100dvh-3rem)] max-sm:w-full max-sm:max-w-none max-sm:origin-bottom max-sm:transform-none max-sm:rounded-none max-sm:border-x-0 max-sm:border-t max-sm:border-b-0 motion-safe:max-sm:data-ending-style:translate-y-4 motion-safe:max-sm:data-starting-style:translate-y-4 max-sm:before:hidden max-sm:before:rounded-none',
      props.class,
    )"
  >
    <slot />
    <DialogPrimitive.DialogClose v-if="props.showCloseButton" v-bind="props.closeProps">
      <template #render="{ props: part }">
        <Button
          v-bind="part"
          aria-label="Close"
          class="absolute end-2 top-2"
          size="icon"
          variant="ghost"
        >
          <XIcon />
        </Button>
      </template>
    </DialogPrimitive.DialogClose>
  </DialogPrimitive.DialogContent>
</template>
