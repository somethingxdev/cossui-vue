<script setup lang="ts">
import { MenuPopup } from '../menu'

type MenuPopupProps = InstanceType<typeof MenuPopup>['$props']

interface Props extends /* @vue-ignore */ MenuPopupProps {
  align?: MenuPopupProps['align']
}

// The anchor is the pointer: the popup opens from its corner, as a native context menu does.
const props = withDefaults(defineProps<Props>(), {
  align: 'start',
})
</script>

<template>
  <MenuPopup :align="props.align">
    <slot />
  </MenuPopup>
</template>
