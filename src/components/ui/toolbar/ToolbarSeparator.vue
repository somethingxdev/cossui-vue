<script setup lang="ts">
import type { ToolbarSeparatorProps } from '@vase-ui/vue/toolbar'
import type { HTMLAttributes } from 'vue'
import { Toolbar as ToolbarPrimitive } from '@vase-ui/vue/toolbar'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ToolbarSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.Separator
    :class="cn(
      `shrink-0 bg-border data-[orientation=horizontal]:my-0.5 data-[orientation=vertical]:my-1.5 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:not-[[class^='h-']]:not-[[class*='_h-']]:self-stretch`,
      props.class,
    )"
    data-slot="toolbar-separator"
  />
</template>
