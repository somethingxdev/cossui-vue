<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ToggleVariants } from '../toggle'
import * as ToggleGroupPrimitive from '@ui-sdk/vue/toggle'
import { provide } from 'vue'
import { cn } from '../../../lib/utils'
import { ToggleGroupContext } from './context'

type ToggleGroupProps = InstanceType<typeof ToggleGroupPrimitive.ToggleGroup>['$props']

interface Props extends /* @vue-ignore */ ToggleGroupProps {
  variant?: ToggleVariants['variant']
  size?: ToggleVariants['size']
  orientation?: 'horizontal' | 'vertical'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  orientation: 'horizontal',
})

provide(ToggleGroupContext, props)
</script>

<template>
  <ToggleGroupPrimitive.ToggleGroup
    :data-size="props.size"
    :data-variant="props.variant"
    :orientation="props.orientation"
    :class="cn(
      'flex w-fit *:focus-visible:z-10 dark:*:[[data-slot=separator]:has(+[data-slot=toggle]:hover)]:before:bg-input/64 dark:*:[[data-slot=separator]:has(+[data-slot=toggle][data-pressed])]:before:bg-input dark:*:[[data-slot=toggle]:hover+[data-slot=separator]]:before:bg-input/64 dark:*:[[data-slot=toggle][data-pressed]+[data-slot=separator]]:before:bg-input',
      props.orientation === 'horizontal'
        ? '*:pointer-coarse:after:min-w-auto'
        : '*:pointer-coarse:after:min-h-auto',
      props.variant === 'default'
        ? 'gap-0.5'
        : props.orientation === 'horizontal'
          ? '*:not-first:rounded-s-none *:not-last:rounded-e-none *:not-first:border-s-0 *:not-last:border-e-0 *:not-first:not-data-[slot=separator]:before:-start-[0.5px] *:not-last:not-data-[slot=separator]:before:-end-[0.5px] *:not-first:before:rounded-s-none *:not-last:before:rounded-e-none'
          : 'flex-col *:not-first:rounded-t-none *:not-last:rounded-b-none *:not-first:border-t-0 *:not-last:border-b-0 *:not-first:not-data-[slot=separator]:before:-top-[0.5px] *:not-last:not-data-[slot=separator]:before:-bottom-[0.5px] *:not-first:before:rounded-t-none *:not-last:before:rounded-b-none *:data-[slot=toggle]:not-last:before:hidden dark:*:last:before:hidden dark:*:first:before:block',
      props.class,
    )"
  >
    <slot />
  </ToggleGroupPrimitive.ToggleGroup>
</template>
