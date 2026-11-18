<script setup lang="ts">
import type { Component } from 'vue'
import * as DrawerPrimitive from '@ui-sdk/vue/drawer'

type DrawerTriggerProps = InstanceType<typeof DrawerPrimitive.DrawerTrigger>['$props']

interface Props extends /* @vue-ignore */ DrawerTriggerProps {
  as?: string | Component
}

const props = defineProps<Props>()
</script>

<template>
  <DrawerPrimitive.DrawerTrigger>
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </DrawerPrimitive.DrawerTrigger>
</template>
