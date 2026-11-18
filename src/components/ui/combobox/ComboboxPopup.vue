<script setup lang="ts">
import type { ComboboxPopupProps, ComboboxPortalProps, ComboboxPositionerProps } from '@vase-ui/vue/combobox'
import type { HTMLAttributes } from 'vue'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { computed, inject } from 'vue'
import { cn } from '../../../lib/utils'
import { ComboboxContext } from './context'

interface Props extends /* @vue-ignore */ ComboboxPopupProps {
  align?: ComboboxPositionerProps['align']
  sideOffset?: ComboboxPositionerProps['sideOffset']
  alignOffset?: ComboboxPositionerProps['alignOffset']
  side?: ComboboxPositionerProps['side']
  anchor?: ComboboxPositionerProps['anchor']
  portalProps?: ComboboxPortalProps
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
  sideOffset: 4,
  align: 'start',
})

const context = inject(ComboboxContext, null)

// Without chips the anchor stays unset, so the part falls back to the input group.
const anchor = computed(() => props.anchor ?? context?.chipsRef.value ?? undefined)
</script>

<template>
  <ComboboxPrimitive.Portal v-bind="props.portalProps">
    <ComboboxPrimitive.Positioner
      data-slot="combobox-positioner"
      class="z-50 select-none"
      :align="props.align"
      :align-offset="props.alignOffset"
      :anchor="anchor"
      :side="props.side"
      :side-offset="props.sideOffset"
    >
      <span
        :class="cn(
          'relative flex max-h-full min-w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) rounded-lg border bg-popover not-dark:bg-clip-padding shadow-lg/5 transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          props.class,
        )"
      >
        <ComboboxPrimitive.Popup
          v-bind="$attrs"
          data-slot="combobox-popup"
          class="flex max-h-[min(var(--available-height),23rem)] flex-1 flex-col text-foreground"
        >
          <slot />
        </ComboboxPrimitive.Popup>
      </span>
    </ComboboxPrimitive.Positioner>
  </ComboboxPrimitive.Portal>
</template>
