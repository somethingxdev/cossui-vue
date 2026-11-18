<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as AutocompletePrimitive from '@ui-sdk/vue/autocomplete'
import { cn } from '../../../lib/utils'

type AutocompleteContentProps = InstanceType<typeof AutocompletePrimitive.AutocompleteContent>['$props']

interface Props extends /* @vue-ignore */ AutocompleteContentProps {
  align?: AutocompleteContentProps['align']
  sideOffset?: AutocompleteContentProps['sideOffset']
  alignOffset?: AutocompleteContentProps['alignOffset']
  side?: AutocompleteContentProps['side']
  anchor?: AutocompleteContentProps['anchor']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
  sideOffset: 4,
  align: 'start',
})
</script>

<template>
  <!-- UI SDK anchors to the `<input>`, which sits inside the control's 1px border: the offsets and width make up for it. -->
  <AutocompletePrimitive.AutocompleteContent
    :align="props.align"
    :align-offset="(props.alignOffset ?? 0) - 1"
    :anchor="props.anchor"
    :side="props.side"
    :side-offset="props.sideOffset + 1"
    :class="cn(
      'm-0 flex max-h-[min(var(--available-height),23rem)] min-w-[calc(var(--anchor-width)+2px)] max-w-(--available-width) origin-(--transform-origin) select-none flex-col overflow-visible rounded-lg border bg-popover not-dark:bg-clip-padding p-0 text-foreground shadow-lg/5 transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
      props.class,
    )"
  >
    <slot />
  </AutocompletePrimitive.AutocompleteContent>
</template>
