<script setup lang="ts">
import type { Component } from 'vue'
import * as DrawerPrimitive from '@ui-sdk/vue/drawer'

type DrawerCloseProps = InstanceType<typeof DrawerPrimitive.DrawerClose>['$props']

interface Props extends /* @vue-ignore */ DrawerCloseProps {
  as?: string | Component
}

const props = defineProps<Props>()
</script>

<template>
  <DrawerPrimitive.DrawerClose>
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </DrawerPrimitive.DrawerClose>
</template>
