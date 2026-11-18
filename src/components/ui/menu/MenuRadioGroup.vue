<script setup lang="ts">
import type { MenuRadioGroupProps } from '@vase-ui/vue/menu'
import { Menu as MenuPrimitive } from '@vase-ui/vue/menu'

interface Props extends /* @vue-ignore */ MenuRadioGroupProps {}

defineProps<Props>()
</script>

<template>
  <MenuPrimitive.RadioGroup data-slot="menu-radio-group">
    <slot />
  </MenuPrimitive.RadioGroup>
</template>
