<script setup lang="ts">
import type { ToastPosition } from './manager'
import Toasts from './Toasts.vue'

export interface ToastProviderProps {
  position?: ToastPosition
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<ToastProviderProps>(), {
  position: 'bottom-right',
})
</script>

<template>
  <slot />
  <Toasts v-bind="$attrs" :position="props.position" />
</template>
