<script setup lang="ts">
import type { CollapsiblePanelProps } from '@vase-ui/vue/collapsible'
import type { HTMLAttributes } from 'vue'
import { Collapsible as CollapsiblePrimitive } from '@vase-ui/vue/collapsible'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ CollapsiblePanelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <CollapsiblePrimitive.Panel
    data-slot="collapsible-panel"
    :class="cn(
      'h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 data-ending-style:h-0 data-starting-style:h-0',
      props.class,
    )"
  >
    <slot />
  </CollapsiblePrimitive.Panel>
</template>
