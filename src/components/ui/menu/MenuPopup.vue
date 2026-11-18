<script setup lang="ts">
import type { MenuPopupProps, MenuPortalProps, MenuPositionerProps } from '@vase-ui/vue/menu'
import type { HTMLAttributes } from 'vue'
import { Menu as MenuPrimitive } from '@vase-ui/vue/menu'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ MenuPopupProps {
  align?: MenuPositionerProps['align']
  sideOffset?: MenuPositionerProps['sideOffset']
  alignOffset?: MenuPositionerProps['alignOffset']
  side?: MenuPositionerProps['side']
  anchor?: MenuPositionerProps['anchor']
  portalProps?: MenuPortalProps
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
  <MenuPrimitive.Portal v-bind="props.portalProps">
    <MenuPrimitive.Positioner
      :align="props.align"
      :align-offset="props.alignOffset"
      :anchor="props.anchor"
      class="z-50"
      data-slot="menu-positioner"
      :side="props.side"
      :side-offset="props.sideOffset"
    >
      <!-- data-slot comes before $attrs so MenuSubPopup can replace it. -->
      <MenuPrimitive.Popup
        data-slot="menu-popup"
        v-bind="$attrs"
        :class="cn(
          `relative flex not-[class*='w-']:min-w-32 origin-(--transform-origin) rounded-lg border bg-popover not-dark:bg-clip-padding shadow-lg/5 outline-none before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] focus:outline-none dark:before:shadow-[0_-1px_--theme(--color-white/6%)]`,
          props.class,
        )"
      >
        <div class="max-h-(--available-height) w-full overflow-y-auto p-1">
          <slot />
        </div>
      </MenuPrimitive.Popup>
    </MenuPrimitive.Positioner>
  </MenuPrimitive.Portal>
</template>
