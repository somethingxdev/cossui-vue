<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as ToolbarPrimitive from '@ui-sdk/vue/toolbar'
import { cn } from '../../../lib/utils'

type ToolbarSeparatorProps = InstanceType<typeof ToolbarPrimitive.ToolbarSeparator>['$props']

interface Props extends /* @vue-ignore */ ToolbarSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.ToolbarSeparator
    :class="cn(
      `shrink-0 bg-border data-[orientation=horizontal]:my-0.5 data-[orientation=vertical]:my-1.5 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:not-[[class^='h-']]:not-[[class*='_h-']]:self-stretch`,
      props.class,
    )"
  />
</template>
