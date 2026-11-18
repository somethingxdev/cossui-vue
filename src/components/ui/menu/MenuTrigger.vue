<script setup lang="ts">
import type { Component } from 'vue'
import * as MenuPrimitive from '@ui-sdk/vue/menu'

type MenuTriggerProps = InstanceType<typeof MenuPrimitive.MenuTrigger>['$props']

interface Props extends /* @vue-ignore */ MenuTriggerProps {
  as?: string | Component
}

const props = defineProps<Props>()
</script>

<template>
  <MenuPrimitive.MenuTrigger>
    <!-- data-pressed: Button styles the trigger of an open menu as pressed. -->
    <template v-if="props.as" #render="{ props: part, state }">
      <component :is="props.as" v-bind="part" :data-pressed="state.open ? '' : undefined">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </MenuPrimitive.MenuTrigger>
</template>
