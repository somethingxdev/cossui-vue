<script setup lang="ts">
import * as MenuPrimitive from '@ui-sdk/vue/menu'

type MenuContextTriggerProps = InstanceType<typeof MenuPrimitive.MenuContextTrigger>['$props']

interface Props extends /* @vue-ignore */ MenuContextTriggerProps {}

defineProps<Props>()
</script>

<template>
  <MenuPrimitive.MenuContextTrigger>
    <slot />
  </MenuPrimitive.MenuContextTrigger>
</template>
