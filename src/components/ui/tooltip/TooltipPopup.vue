<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as TooltipPrimitive from '@ui-sdk/vue/tooltip'
import { cn } from '../../../lib/utils'

type TooltipContentProps = InstanceType<typeof TooltipPrimitive.TooltipContent>['$props']

interface Props extends /* @vue-ignore */ TooltipContentProps {
  align?: TooltipContentProps['align']
  side?: TooltipContentProps['side']
  sideOffset?: number
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  align: 'center',
  side: 'top',
  sideOffset: 4,
})
</script>

<template>
  <TooltipPrimitive.TooltipContent
    v-slot="{ state }"
    :align="props.align"
    :side="props.side"
    :side-offset="props.sideOffset"
    :class="cn(
      'relative max-w-(--available-width) origin-(--transform-origin) overflow-visible text-balance rounded-md border bg-popover not-dark:bg-clip-padding px-2 py-1 text-popover-foreground text-xs shadow-md/5 transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-md)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0 data-instant:duration-0 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
      props.class,
    )"
  >
    <slot :state="state" />
  </TooltipPrimitive.TooltipContent>
</template>
