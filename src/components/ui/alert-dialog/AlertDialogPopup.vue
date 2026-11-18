<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as AlertDialogPrimitive from '@ui-sdk/vue/alert-dialog'
import { cn } from '../../../lib/utils'
import AlertDialogBackdrop from './AlertDialogBackdrop.vue'

type AlertDialogContentProps = InstanceType<typeof AlertDialogPrimitive.AlertDialogContent>['$props']

interface Props extends /* @vue-ignore */ AlertDialogContentProps {
  bottomStickOnMobile?: boolean
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  bottomStickOnMobile: true,
})
</script>

<template>
  <AlertDialogBackdrop />
  <!-- The content sits in the top layer, so it places itself: a quarter of the free space above it, as coss ui's viewport grid does. -->
  <AlertDialogPrimitive.AlertDialogContent
    v-bind="$attrs"
    :class="cn(
      'fixed inset-x-0 top-[calc(25dvh+0.5rem)] z-50 mx-auto flex max-h-[calc(100dvh-2rem)] min-h-0 w-[calc(100%-2rem)] min-w-0 max-w-lg origin-center transform-[translateY(-25%)] flex-col rounded-2xl border bg-popover not-dark:bg-clip-padding text-popover-foreground opacity-[calc(1-var(--dialog-stack))] shadow-lg/5 transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:opacity-0 data-starting-style:opacity-0 sm:scale-[calc(1-0.1*var(--dialog-stack))] sm:data-ending-style:scale-98 sm:data-starting-style:scale-98 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
      props.bottomStickOnMobile && 'max-sm:top-auto max-sm:bottom-0 max-sm:max-h-[calc(100dvh-3rem)] max-sm:w-full max-sm:max-w-none max-sm:origin-bottom max-sm:transform-none max-sm:rounded-none max-sm:border-x-0 max-sm:border-t max-sm:border-b-0 max-sm:data-ending-style:translate-y-4 max-sm:data-starting-style:translate-y-4 max-sm:before:hidden max-sm:before:rounded-none',
      props.class,
    )"
  >
    <slot />
  </AlertDialogPrimitive.AlertDialogContent>
</template>
