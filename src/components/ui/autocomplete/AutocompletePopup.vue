<script setup lang="ts">
import type { AutocompletePopupProps, AutocompletePortalProps, AutocompletePositionerProps } from '@vase-ui/vue/autocomplete'
import type { HTMLAttributes } from 'vue'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ AutocompletePopupProps {
  align?: AutocompletePositionerProps['align']
  sideOffset?: AutocompletePositionerProps['sideOffset']
  alignOffset?: AutocompletePositionerProps['alignOffset']
  side?: AutocompletePositionerProps['side']
  anchor?: AutocompletePositionerProps['anchor']
  portalProps?: AutocompletePortalProps
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
  sideOffset: 4,
  align: 'start',
})
</script>

<template>
  <AutocompletePrimitive.Portal v-bind="props.portalProps">
    <AutocompletePrimitive.Positioner
      data-slot="autocomplete-positioner"
      class="z-50 select-none"
      :align="props.align"
      :align-offset="props.alignOffset"
      :anchor="props.anchor"
      :side="props.side"
      :side-offset="props.sideOffset"
    >
      <span
        :class="cn(
          'relative flex max-h-full min-w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) rounded-lg border bg-popover not-dark:bg-clip-padding shadow-lg/5 transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          props.class,
        )"
      >
        <AutocompletePrimitive.Popup
          v-bind="$attrs"
          data-slot="autocomplete-popup"
          class="flex max-h-[min(var(--available-height),23rem)] flex-1 flex-col text-foreground"
        >
          <slot />
        </AutocompletePrimitive.Popup>
      </span>
    </AutocompletePrimitive.Positioner>
  </AutocompletePrimitive.Portal>
</template>
