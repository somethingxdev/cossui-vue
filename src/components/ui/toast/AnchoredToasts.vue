<script setup lang="ts">
import type { DirectiveBinding } from 'vue'
import type { AnchoredToastData } from './manager'
import { position } from '@ui-sdk/core'
import * as ToastPrimitive from '@ui-sdk/vue/toast'
import { anchoredToaster, upsertReplayClassName } from './manager'
import ToastBody from './ToastBody.vue'

const stops = new WeakMap<HTMLElement, () => void>()

function place(el: HTMLElement, { value, oldValue }: DirectiveBinding<AnchoredToastData['positionerProps']>) {
  if (value.anchor === oldValue?.anchor)
    return
  stops.get(el)?.()
  const { anchor, ...options } = value
  stops.set(el, position(anchor, el, { align: 'center', side: 'top', ...options }))
}

// UI SDK toasts have no anchor of their own, so each one is placed against its anchor with core's `position`.
const vAnchor = {
  mounted: place,
  updated: place,
  unmounted: (el: HTMLElement) => stops.get(el)?.(),
}

const toastClass = 'max-w-[min(--spacing(64),var(--available-width))] text-balance border bg-popover not-dark:bg-clip-padding text-popover-foreground text-xs transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:opacity-0 data-starting-style:opacity-0 motion-safe:data-ending-style:scale-98 motion-safe:data-starting-style:scale-98 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]'
</script>

<template>
  <ToastPrimitive.ToastRegion
    class="fixed inset-auto m-0 size-0 overflow-visible border-0 bg-transparent p-0"
    :toaster="anchoredToaster"
  >
    <template #default="{ toast }">
      <ToastPrimitive.Toast
        v-anchor="(toast.data as AnchoredToastData).positionerProps"
        :class="[
          toastClass,
          (toast.data as AnchoredToastData).tooltipStyle
            ? 'rounded-md shadow-md/5 before:rounded-[calc(var(--radius-md)-1px)]'
            : 'rounded-lg shadow-lg/5 before:rounded-[calc(var(--radius-lg)-1px)]',
          upsertReplayClassName(toast),
        ]"
      >
        <div v-if="(toast.data as AnchoredToastData).tooltipStyle" class="px-2 py-1">
          <ToastPrimitive.ToastTitle />
        </div>
        <div v-else class="flex items-center justify-between gap-1.5 overflow-hidden px-3.5 py-3 text-sm">
          <ToastBody :type="toast.type" />
        </div>
      </ToastPrimitive.Toast>
    </template>
  </ToastPrimitive.ToastRegion>
</template>
