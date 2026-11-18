<script setup lang="ts">
import type { Component } from 'vue'
import * as PreviewCardPrimitive from '@ui-sdk/vue/hover-card'

type HoverCardTriggerProps = InstanceType<typeof PreviewCardPrimitive.HoverCardTrigger>['$props']

interface Props extends /* @vue-ignore */ HoverCardTriggerProps {
  as?: string | Component
}

const props = defineProps<Props>()
</script>

<template>
  <PreviewCardPrimitive.HoverCardTrigger>
    <template v-if="props.as" #render="{ props: part }">
      <component :is="props.as" v-bind="part">
        <slot />
      </component>
    </template>
    <template v-else #default>
      <slot />
    </template>
  </PreviewCardPrimitive.HoverCardTrigger>
</template>
