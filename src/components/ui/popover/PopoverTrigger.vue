<script setup lang="ts">
import type { Component } from 'vue'
import * as PopoverPrimitive from '@ui-sdk/vue/popover'

type PopoverTriggerProps = InstanceType<typeof PopoverPrimitive.PopoverTrigger>['$props']

interface Props extends /* @vue-ignore */ PopoverTriggerProps {
  as?: string | Component
}

const props = defineProps<Props>()
</script>

<template>
  <PopoverPrimitive.PopoverTrigger>
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </PopoverPrimitive.PopoverTrigger>
</template>
