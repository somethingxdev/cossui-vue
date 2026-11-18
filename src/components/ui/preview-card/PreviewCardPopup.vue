<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as PreviewCardPrimitive from '@ui-sdk/vue/hover-card'
import { cn } from '../../../lib/utils'

type HoverCardContentProps = InstanceType<typeof PreviewCardPrimitive.HoverCardContent>['$props']

interface Props extends /* @vue-ignore */ HoverCardContentProps {
  align?: HoverCardContentProps['align']
  sideOffset?: number
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  align: 'center',
  sideOffset: 4,
})
</script>

<template>
  <PreviewCardPrimitive.HoverCardContent
    v-slot="{ state }"
    :align="props.align"
    :side-offset="props.sideOffset"
    :class="cn(
      'relative flex w-64 origin-(--transform-origin) overflow-visible text-balance rounded-lg border bg-popover not-dark:bg-clip-padding p-4 text-popover-foreground text-sm shadow-lg/5 transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
      props.class,
    )"
  >
    <slot :state="state" />
  </PreviewCardPrimitive.HoverCardContent>
</template>
