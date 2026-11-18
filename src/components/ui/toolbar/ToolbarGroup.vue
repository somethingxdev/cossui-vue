<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as ToolbarPrimitive from '@ui-sdk/vue/toolbar'
import { cn } from '../../../lib/utils'

type ToolbarGroupProps = InstanceType<typeof ToolbarPrimitive.ToolbarGroup>['$props']

interface Props extends /* @vue-ignore */ ToolbarGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.ToolbarGroup :class="cn('flex items-center gap-1', props.class)">
    <slot />
  </ToolbarPrimitive.ToolbarGroup>
</template>
