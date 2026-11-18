<script setup lang="ts">
import type { MenuPopupProps, MenuPositionerProps } from '@vase-ui/vue/menu'
import { computed } from 'vue'
import MenuPopup from './MenuPopup.vue'

interface Props extends /* @vue-ignore */ MenuPopupProps {
  align?: MenuPositionerProps['align']
  sideOffset?: MenuPositionerProps['sideOffset']
  alignOffset?: MenuPositionerProps['alignOffset']
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
  <MenuPopup
    :align="props.align"
    :align-offset="props.alignOffset ?? defaultAlignOffset"
    data-slot="menu-sub-content"
    side="inline-end"
    :side-offset="props.sideOffset"
  >
    <slot />
  </MenuPopup>
</template>
