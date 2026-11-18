<script setup lang="ts">
import type { ToastPortalProps, ToastProviderProps as ToastPrimitiveProviderProps } from '@vase-ui/vue/toast'
import { Toast as ToastPrimitive } from '@vase-ui/vue/toast'
import AnchoredToasts from './AnchoredToasts.vue'
import { anchoredToastManager } from './manager'

export interface AnchoredToastProviderProps extends /* @vue-ignore */ ToastPrimitiveProviderProps {
  portalProps?: ToastPortalProps
}

const props = defineProps<AnchoredToastProviderProps>()
</script>

<template>
  <ToastPrimitive.Provider :toast-manager="anchoredToastManager">
    <slot />
    <AnchoredToasts :portal-props="props.portalProps" />
  </ToastPrimitive.Provider>
</template>
