<script setup lang="ts">
import MenuPopup from './MenuPopup.vue'

type MenuPopupProps = InstanceType<typeof MenuPopup>['$props']

interface Props extends /* @vue-ignore */ MenuPopupProps {
  align?: MenuPopupProps['align']
  sideOffset?: MenuPopupProps['sideOffset']
  alignOffset?: number
}

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 0,
  align: 'start',
})
</script>

<template>
  <!-- -5 is the popup's border and padding, so the first item lines up with the trigger. -->
  <MenuPopup
    sub
    :align="props.align"
    :align-offset="props.alignOffset ?? (props.align === 'center' ? undefined : -5)"
    :side-offset="props.sideOffset"
  >
    <slot />
  </MenuPopup>
</template>
