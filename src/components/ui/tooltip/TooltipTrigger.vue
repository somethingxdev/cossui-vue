<script setup lang="ts">
import type { Component } from 'vue'
import * as TooltipPrimitive from '@ui-sdk/vue/tooltip'

type TooltipTriggerProps = InstanceType<typeof TooltipPrimitive.TooltipTrigger>['$props']

interface Props extends /* @vue-ignore */ TooltipTriggerProps {
  as?: string | Component
}

const props = defineProps<Props>()
</script>

<template>
  <TooltipPrimitive.TooltipTrigger>
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </TooltipPrimitive.TooltipTrigger>
</template>
