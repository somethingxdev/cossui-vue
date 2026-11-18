<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as SelectPrimitive from '@ui-sdk/vue/select'
import { cn } from '../../../lib/utils'

type SelectContentProps = InstanceType<typeof SelectPrimitive.SelectContent>['$props']

interface Props extends /* @vue-ignore */ SelectContentProps {
  side?: SelectContentProps['side']
  sideOffset?: SelectContentProps['sideOffset']
  align?: SelectContentProps['align']
  alignOffset?: SelectContentProps['alignOffset']
  alignItemWithTrigger?: SelectContentProps['alignItemWithTrigger']
  anchor?: SelectContentProps['anchor']
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
  sideOffset: 4,
  align: 'start',
  alignOffset: 0,
  alignItemWithTrigger: true,
})
</script>

<template>
  <SelectPrimitive.SelectContent
    v-bind="$attrs"
    :align="props.align"
    :align-item-with-trigger="props.alignItemWithTrigger"
    :align-offset="props.alignOffset"
    :anchor="props.anchor"
    :side="props.side"
    :side-offset="props.sideOffset"
    class="m-0 flex max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) select-none flex-col overflow-visible rounded-lg border bg-popover not-dark:bg-clip-padding p-0 text-foreground shadow-lg/5 outline-none before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/6%)]"
  >
    <SelectPrimitive.SelectList :class="cn('min-h-0 overflow-y-auto p-1', props.class)">
      <slot />
    </SelectPrimitive.SelectList>
  </SelectPrimitive.SelectContent>
</template>
