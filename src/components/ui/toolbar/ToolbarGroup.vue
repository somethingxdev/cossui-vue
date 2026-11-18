<script setup lang="ts">
import type { ToolbarGroupProps } from '@vase-ui/vue/toolbar'
import type { HTMLAttributes } from 'vue'
import { Toolbar as ToolbarPrimitive } from '@vase-ui/vue/toolbar'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ToolbarGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ToolbarPrimitive.Group
    :class="cn('flex items-center gap-1', props.class)"
    data-slot="toolbar-group"
  >
    <slot />
  </ToolbarPrimitive.Group>
</template>
