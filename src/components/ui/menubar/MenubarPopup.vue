<script setup lang="ts">
import type { MenuPopupProps, MenuPositionerProps } from '@vase-ui/vue/menu'
import { MenuPopup } from '../menu'

interface Props extends /* @vue-ignore */ MenuPopupProps {
  align?: MenuPositionerProps['align']
  sideOffset?: MenuPositionerProps['sideOffset']
  alignOffset?: MenuPositionerProps['alignOffset']
}

// A menubar menu opens from the start of its trigger, as in a desktop app, and clears the padding of the bar.
const props = withDefaults(defineProps<Props>(), {
  align: 'start',
  sideOffset: 8,
  alignOffset: -4,
})
</script>

<template>
  <MenuPopup
    :align="props.align"
    :align-offset="props.alignOffset"
    :side-offset="props.sideOffset"
  >
    <slot />
  </MenuPopup>
</template>
