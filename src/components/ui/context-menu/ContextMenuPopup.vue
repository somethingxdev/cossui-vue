<script setup lang="ts">
import type { ContextMenuPopupProps, ContextMenuPortalProps, ContextMenuPositionerProps } from '@vase-ui/vue/context-menu'
import type { HTMLAttributes } from 'vue'
import { ContextMenu as ContextMenuPrimitive } from '@vase-ui/vue/context-menu'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ContextMenuPopupProps {
  align?: ContextMenuPositionerProps['align']
  sideOffset?: ContextMenuPositionerProps['sideOffset']
  alignOffset?: ContextMenuPositionerProps['alignOffset']
  side?: ContextMenuPositionerProps['side']
  anchor?: ContextMenuPositionerProps['anchor']
  portalProps?: ContextMenuPortalProps
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 4,
  align: 'center',
  side: 'bottom',
})
</script>

<template>
  <ContextMenuPrimitive.Portal v-bind="props.portalProps">
    <ContextMenuPrimitive.Positioner
      :align="props.align"
      :align-offset="props.alignOffset"
      :anchor="props.anchor"
      class="z-50"
      data-slot="context-menu-positioner"
      :side="props.side"
      :side-offset="props.sideOffset"
    >
      <!-- data-slot comes before $attrs so ContextMenuSubPopup can replace it. -->
      <ContextMenuPrimitive.Popup
        data-slot="context-menu-popup"
        v-bind="$attrs"
        :class="cn(
          `relative flex not-[class*='w-']:min-w-32 origin-(--transform-origin) rounded-lg border bg-popover not-dark:bg-clip-padding shadow-lg/5 outline-none before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] focus:outline-none dark:before:shadow-[0_-1px_--theme(--color-white/6%)]`,
          props.class,
        )"
      >
        <div class="max-h-(--available-height) w-full overflow-y-auto p-1">
          <slot />
        </div>
      </ContextMenuPrimitive.Popup>
    </ContextMenuPrimitive.Positioner>
  </ContextMenuPrimitive.Portal>
</template>
