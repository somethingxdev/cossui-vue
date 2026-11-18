<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as CollapsiblePrimitive from '@ui-sdk/vue/collapsible'
import { cn } from '../../../lib/utils'

type CollapsiblePanelProps = InstanceType<typeof CollapsiblePrimitive.CollapsiblePanel>['$props']

interface Props extends /* @vue-ignore */ CollapsiblePanelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <CollapsiblePrimitive.CollapsiblePanel
    :class="cn(
      'h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 data-ending-style:h-0 data-starting-style:h-0',
      props.class,
    )"
  >
    <slot />
  </CollapsiblePrimitive.CollapsiblePanel>
</template>
