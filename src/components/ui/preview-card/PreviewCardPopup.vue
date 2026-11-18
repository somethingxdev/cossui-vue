<script setup lang="ts">
import type { PreviewCardPopupProps, PreviewCardPortalProps, PreviewCardPositionerProps } from '@vase-ui/vue/preview-card'
import type { HTMLAttributes } from 'vue'
import { PreviewCard as PreviewCardPrimitive } from '@vase-ui/vue/preview-card'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ PreviewCardPopupProps {
  align?: PreviewCardPositionerProps['align']
  sideOffset?: PreviewCardPositionerProps['sideOffset']
  anchor?: PreviewCardPositionerProps['anchor']
  portalProps?: PreviewCardPortalProps
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  align: 'center',
  sideOffset: 4,
})
</script>

<template>
  <PreviewCardPrimitive.Portal v-bind="props.portalProps">
    <PreviewCardPrimitive.Positioner
      :align="props.align"
      :anchor="props.anchor"
      class="z-50"
      data-slot="preview-card-positioner"
      :side-offset="props.sideOffset"
    >
      <PreviewCardPrimitive.Popup
        v-bind="$attrs"
        data-slot="preview-card-content"
        :class="cn(
          'relative flex w-64 origin-(--transform-origin) text-balance rounded-lg border bg-popover not-dark:bg-clip-padding p-4 text-popover-foreground text-sm shadow-lg/5 transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          props.class,
        )"
      >
        <slot />
      </PreviewCardPrimitive.Popup>
    </PreviewCardPrimitive.Positioner>
  </PreviewCardPrimitive.Portal>
</template>
