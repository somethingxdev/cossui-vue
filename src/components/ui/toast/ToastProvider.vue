<script setup lang="ts">
import type { ToastPortalProps, ToastProviderProps as ToastPrimitiveProviderProps } from '@vase-ui/vue/toast'
import type { ToastPosition } from './manager'
import { Toast as ToastPrimitive } from '@vase-ui/vue/toast'
import { toastManager } from './manager'
import Toasts from './Toasts.vue'

export interface ToastProviderProps extends /* @vue-ignore */ ToastPrimitiveProviderProps {
  position?: ToastPosition
  portalProps?: ToastPortalProps
}

const props = withDefaults(defineProps<ToastProviderProps>(), {
  position: 'bottom-right',
})
</script>

<template>
  <ToastPrimitive.Provider :toast-manager="toastManager">
    <slot />
    <Toasts :portal-props="props.portalProps" :position="props.position" />
  </ToastPrimitive.Provider>
</template>
