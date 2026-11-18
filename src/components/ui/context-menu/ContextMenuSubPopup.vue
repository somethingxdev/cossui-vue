<script setup lang="ts">
import type { ContextMenuPopupProps, ContextMenuPositionerProps } from '@vase-ui/vue/context-menu'
import { computed } from 'vue'
import ContextMenuPopup from './ContextMenuPopup.vue'

interface Props extends /* @vue-ignore */ ContextMenuPopupProps {
  align?: ContextMenuPositionerProps['align']
  sideOffset?: ContextMenuPositionerProps['sideOffset']
  alignOffset?: ContextMenuPositionerProps['alignOffset']
}

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 0,
  align: 'start',
})

const defaultAlignOffset = computed(() => props.align !== 'center'
  ? -5
  : undefined)
</script>

<template>
  <ContextMenuPopup
    :align="props.align"
    :align-offset="props.alignOffset ?? defaultAlignOffset"
    data-slot="context-menu-sub-content"
    side="inline-end"
    :side-offset="props.sideOffset"
  >
    <slot />
  </ContextMenuPopup>
</template>
