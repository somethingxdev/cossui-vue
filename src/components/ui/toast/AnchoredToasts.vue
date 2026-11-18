<script setup lang="ts">
import type { ToastPortalProps } from '@vase-ui/vue/toast'
import type { ToastData } from './manager'
import { Toast as ToastPrimitive } from '@vase-ui/vue/toast'
import { computed } from 'vue'
import { upsertReplayClassName } from './manager'
import ToastBody from './ToastBody.vue'

const props = defineProps<{
  portalProps?: ToastPortalProps
}>()

const { toasts } = ToastPrimitive.useToastManager<ToastData>()

const anchoredToasts = computed(() => toasts.value.filter(toast => toast.positionerProps?.anchor))

const rootClass = 'relative text-balance border bg-popover not-dark:bg-clip-padding text-popover-foreground text-xs transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:opacity-0 data-starting-style:opacity-0 motion-safe:data-ending-style:scale-98 motion-safe:data-starting-style:scale-98 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]'
</script>

<template>
  <ToastPrimitive.Portal data-slot="toast-portal-anchored" v-bind="props.portalProps">
    <ToastPrimitive.Viewport class="outline-none" data-slot="toast-viewport-anchored">
      <ToastPrimitive.Positioner
        v-for="toast in anchoredToasts"
        :key="toast.id"
        class="z-60 max-w-[min(--spacing(64),var(--available-width))]"
        data-slot="toast-positioner"
        :side-offset="toast.positionerProps?.sideOffset ?? 4"
        :toast="toast"
      >
        <ToastPrimitive.Root
          :class="[
            rootClass,
            toast.data?.tooltipStyle
              ? 'rounded-md shadow-md/5 before:rounded-[calc(var(--radius-md)-1px)]'
              : 'rounded-lg shadow-lg/5 before:rounded-[calc(var(--radius-lg)-1px)]',
            upsertReplayClassName(toast),
          ]"
          v-bind="toast.data?.rootProps"
          data-slot="toast-popup"
          :toast="toast"
        >
          <ToastPrimitive.Content v-if="toast.data?.tooltipStyle" class="pointer-events-auto px-2 py-1">
            <ToastPrimitive.Title data-slot="toast-title" />
          </ToastPrimitive.Content>
          <ToastPrimitive.Content
            v-else
            class="pointer-events-auto flex items-center justify-between gap-1.5 overflow-hidden px-3.5 py-3 text-sm"
          >
            <ToastBody :type="toast.type" />
          </ToastPrimitive.Content>
        </ToastPrimitive.Root>
      </ToastPrimitive.Positioner>
    </ToastPrimitive.Viewport>
  </ToastPrimitive.Portal>
</template>
