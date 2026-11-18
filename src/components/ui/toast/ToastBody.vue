<script setup lang="ts">
import { CircleAlertIcon, CircleCheckIcon, InfoIcon, LoaderCircleIcon, TriangleAlertIcon } from '@lucide/vue'
import * as ToastPrimitive from '@ui-sdk/vue/toast'
import { computed } from 'vue'
import { buttonVariants } from '../button'

const props = defineProps<{
  type?: string
}>()

const TOAST_ICONS = {
  error: CircleAlertIcon,
  info: InfoIcon,
  loading: LoaderCircleIcon,
  success: CircleCheckIcon,
  warning: TriangleAlertIcon,
} as const

const icon = computed(() => TOAST_ICONS[props.type as keyof typeof TOAST_ICONS])
</script>

<template>
  <div class="flex gap-2">
    <div
      v-if="icon"
      class="[&>svg]:h-lh [&>svg]:w-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
      data-slot="toast-icon"
    >
      <component
        :is="icon"
        class="in-data-[type=loading]:animate-spin in-data-[type=error]:text-destructive in-data-[type=info]:text-info in-data-[type=success]:text-success in-data-[type=warning]:text-warning in-data-[type=loading]:opacity-80"
      />
    </div>
    <div class="flex flex-col gap-0.5">
      <ToastPrimitive.ToastTitle class="font-medium" />
      <ToastPrimitive.ToastDescription class="text-muted-foreground" />
    </div>
  </div>
  <ToastPrimitive.ToastAction :class="buttonVariants({ size: 'xs' })" />
</template>
