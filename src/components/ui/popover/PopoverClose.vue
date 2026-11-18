<script setup lang="ts">
import type { Component } from 'vue'
import * as PopoverPrimitive from '@ui-sdk/vue/popover'

type PopoverCloseProps = InstanceType<typeof PopoverPrimitive.PopoverClose>['$props']

interface Props extends /* @vue-ignore */ PopoverCloseProps {
  as?: string | Component
}

const props = defineProps<Props>()
</script>

<template>
  <PopoverPrimitive.PopoverClose>
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </PopoverPrimitive.PopoverClose>
</template>
