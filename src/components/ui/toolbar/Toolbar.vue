<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as ToolbarPrimitive from '@ui-sdk/vue/toolbar'
import { cn } from '../../../lib/utils'

type ToolbarProps = InstanceType<typeof ToolbarPrimitive.Toolbar>['$props']

interface Props extends /* @vue-ignore */ ToolbarProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.Toolbar :class="cn('relative flex gap-2 rounded-xl border bg-card not-dark:bg-clip-padding p-1 text-card-foreground', props.class)">
    <slot />
  </ToolbarPrimitive.Toolbar>
</template>
