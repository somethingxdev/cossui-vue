<script setup lang="ts">
import type { Component } from 'vue'
import MenuItem from './MenuItem.vue'

type MenuItemProps = InstanceType<typeof MenuItem>['$props']

interface Props extends /* @vue-ignore */ MenuItemProps {
  as?: string | Component
  closeOnClick?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'a',
  closeOnClick: true,
})
</script>

<template>
  <MenuItem :as="props.as" :close-on-select="props.closeOnClick">
    <slot />
  </MenuItem>
</template>
