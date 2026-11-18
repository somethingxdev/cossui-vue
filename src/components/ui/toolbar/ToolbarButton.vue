<script setup lang="ts">
import type { Component } from 'vue'
import * as ToolbarPrimitive from '@ui-sdk/vue/toolbar'

type ToolbarButtonProps = InstanceType<typeof ToolbarPrimitive.ToolbarButton>['$props']

interface Props extends /* @vue-ignore */ ToolbarButtonProps {
  as?: string | Component
}

const props = defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.ToolbarButton>
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </ToolbarPrimitive.ToolbarButton>
</template>
